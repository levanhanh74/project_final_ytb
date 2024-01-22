import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import routePage from './Route/router';
import DefaultComponent from './components/DeFaultComponent/DefaultComponent';
import NotFoundPage from './pages/NotFoundPage/notFoundPage';

// import { isCheckJSONString } from "./untill";
import { useEffect } from "react";

import { jwtDecode } from "jwt-decode";
import * as LoginUser from './services/UserService'
import { useDispatch, useSelector } from "react-redux";
import { resetUser, updateUser } from "./redux/slides/userSlices";
import { isCheckJSONString } from "./untill";

function App() {
  const useSelectorUser = useSelector(state => state.user);
  const dispatch = useDispatch();
  // Handle detail user 
  const handleGetDetailUser = async (id, access_token) => {

    const res = await LoginUser.UserDetailSerVice(id, access_token);
    const refresh_Token = JSON.parse(localStorage.getItem('refresh_Token'));
    // console.log("res: ", refresh_Token);
    dispatch(updateUser({ ...res?.data?.dataNew, access_token, refresh_Token }));

  }

  // Save token into localStorage. When reload brower it will call  localStorage for can access info into dataBase.
  useEffect(() => {
    const fetchData = async () => {
      const { decode_AccessToken, getItemLoginAccessToken } = await handleDecode();
      // console.log("decode : ", decode_ AccessToken, " getItemAccessToken: ", getItemLoginAccessToken);
      if (decode_AccessToken?.id && getItemLoginAccessToken) {
        await handleGetDetailUser(decode_AccessToken?.id, getItemLoginAccessToken); // getData One DetailUser 
      } else {
        console.log("Token_out_not_isset!");
      }
    }
    fetchData();
  }, []);

  // handleDecode 
  const handleDecode = async () => {
    let getItemLoginAccessToken = useSelectorUser?.access_token || localStorage.getItem("access_Token");
    // console.log("getItemLoginAccessToken: ", isCheckJSONString(getItemLoginAccessToken));
    let decode_AccessToken = {};
    if (getItemLoginAccessToken && isCheckJSONString(getItemLoginAccessToken) && !useSelectorUser?.access_token) {
      getItemLoginAccessToken = JSON.parse(getItemLoginAccessToken);
      decode_AccessToken = await jwtDecode(getItemLoginAccessToken);
    }
    // console.log(decode_AccessToken);
    return { decode_AccessToken, getItemLoginAccessToken }
  }

  // Khi token het han thi no se duoc goi vao day
  LoginUser.axiosJWT.interceptors.request.use(async function (config) {
    const currentTime = new Date();
    const { decode_AccessToken } = await handleDecode(); // getAccess_Token
    const refresh_Token = JSON.parse(localStorage.getItem('refresh_Token')); // getRefresh_token at localStorage.
    const decodeRefresh_Token = jwtDecode(refresh_Token); // parse refresh_Token to info from database.

    if (decode_AccessToken?.exp < currentTime.getTime() / 1000) {
      if (decodeRefresh_Token?.exp > currentTime.getTime() / 1000) {
        const dataRefresh_Token = await LoginUser.Refresh_token(refresh_Token);

        config.headers['token'] = dataRefresh_Token?.data.access_token
      } else {
        dispatch(resetUser());
      }
    }
    return config;


    // const currentTime = new Date()
    // const { decoded } = handleDecoded()
    // let storageRefreshToken = localStorage.getItem('refresh_token')
    // const refreshToken = JSON.parse(storageRefreshToken)
    // const decodedRefreshToken =  jwt_decode(refreshToken)
    // if (decoded?.exp < currentTime.getTime() / 1000) {
    //   if(decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
    //     const data = await UserService.refreshToken(refreshToken);
    //     config.headers['token'] = `Bearer ${data?.access_token}`
    //   }else {
    //     dispatch(resetUser())
    //   }
    // }
    // return config;
  },
    function (error) {
      return Promise.reject(error);
    },
  );

  return (
    <div className="app_container">
      <Router>
        <Routes>
          {
            routePage.map((route) => {
              const Page = route.page;
              const Layout = route.isNotFound ? DefaultComponent : NotFoundPage; // if route === true render default Layout else render compent NotFount.
              return (
                <Route key={route.path} path={route.path}
                  element={<Layout><Page /></Layout>}
                />
              );
            })
          }
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
