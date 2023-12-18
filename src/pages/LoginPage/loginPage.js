import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as LoginUser from "../../services/UserService";
import { UseMutationHook } from "../../Hooks/UseMutationHook";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from "../../redux/slides/userSlices";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrEmail, setValidationErrEmail] = useState('');
    const [validationErrPass, setValidationErrPass] = useState('');
    const [validationErrLogin, setValidationErrLogin] = useState('');

    const [opacityPass, setOpacityPass] = useState('secondary')
    const [opacityBtn, setOpacityBtn] = useState('secondary')

    const navigate = useNavigate();

    const dispatchUser = useDispatch();
    
    const mutation = UseMutationHook((data) => {
        return LoginUser.UserLoginSerVice(data)
    })

    const { data } = mutation;
    // console.log("data: ", data);
    const isCheckLogin = data?.status === "OK";
    // console.log("isCheckLogin: ", isCheckLogin);

    // handle input when user enter
    function handleOpacityPass(e) {
        const getPass = e.target.value;
        setPassword(getPass)
    }
    function handleOpacityEmail(e) {
        const getEmail = e.target.value;
        setEmail(getEmail)
    }

    // Check user have enter true with email.
    const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const handleLogin = () => {
        // console.log(!checkEmail, !password.length <= 4);
        if (!checkEmail || password.length <= 4) {  // Check conditional false
            const validationEmail = !checkEmail ? "You have enter your email!" : ""
            const validationPass = password.length <= 4 ? "You have must enter enough your password start 5 character increase!" : ""
            setValidationErrEmail(validationEmail);
            setValidationErrPass(validationPass);
        } else {  // run complier conditional true
            const data = {
                email,
                password,
            };
            mutation.mutate(data);
        }

    }
    // Handle getUser API with backend 
    const handleGetDetailUser = async (id, access_token) => {
        console.log(id, access_token);
        const res = await LoginUser.UserDetailSerVice(id, access_token);
        console.log("res: ", res);
    }
    // handle validate when user enter log error or next step.
    useEffect(() => {
        if (data?.status) {
            const messesLogin = isCheckLogin ? data?.message : data?.message;
            if (data?.status === "OK") {
                // console.log("MutationData: ", data.access_token);
                if (data?.access_token) {
                    // localStorage.setItem("access_Token", data?.access_token);
                    const decode = jwtDecode(data?.access_token);
                    
                    // console.log("decode: ", data?.data._id);
                    if (decode?.id === data?.data._id) {
                        // console.log("data: ", data);

                        // handle move data to backend 
                        const dehandle = handleGetDetailUser(decode?.id, data?.access_token);

                        dispatchUser(updateUser({ name: data?.data.name, email: data?.data.email, access_token: data?.access_token }));
                        navigate('/')

                        toast.success(messesLogin)
                        setValidationErrEmail('');
                        setValidationErrPass("");
                        setEmail('');
                        setPassword('');
                        setValidationErrLogin(messesLogin);
                    }
                }

            } else {   /// Log error from backend 
                if (data.message === "This user not isset, please email difference!") {
                    toast.warning(messesLogin)
                    setValidationErrLogin(messesLogin);
                    setValidationErrEmail(messesLogin)
                } else {
                    setValidationErrLogin(messesLogin)
                    setValidationErrEmail('')
                    toast.warning(messesLogin)
                }
            }
        }
    }, [data])



    return (<>
        <div className="container">
            <div className="row mt-5 rounded-3 border">
                <div className="col-8 flex-fill bg-white">
                    <div className="w-75 mt-3 p-3 m-auto">
                        <h3>Xin chào</h3>
                        <p className="mt-4">Đăng nhập hoặc Tạo tài khoản</p>
                        <p className={data?.status === "ERROR" ? "text-white bg-danger text-center" : "text-white bg-success     text-center"}>{validationErrLogin}</p>
                        <form>
                            <div className="form-group mt-2">
                                {/* <label for="exampleInputEmail1">Email address</label> */}
                                <input type="email" className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" placeholder="Enter email"
                                    value={email}
                                    onChange={handleOpacityEmail}
                                />
                                <small id="emailHelp" className="form-text fw-fw-normal text-danger">{validationErrEmail}</small>
                            </div>
                            <div className="form-group mt-2">
                                {/* <label for="exampleInputPassword1">Password</label> */}
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                    value={password}
                                    // onChange={e => setPassword(e.target.value)}
                                    onChange={handleOpacityPass}
                                />
                                <small id="emailHelp" className="form-text fw-fw-normal text-danger">{validationErrPass}</small>
                            </div>

                            <button type="button" className={`btn btn-${opacityPass} text-light fs-5 w-100 mt-2`} onClick={handleLogin}>Login Account</button>
                        </form>
                        <h6 className="mt-3 mb-3"><Link to="#" className="text-decoration-none">Quen mat khau?</Link></h6>
                        <h6 className="mt-4">Ban chua co tai khoan? <Link to={"/signup"} className="text-decoration-none fw-normal">Signup</Link></h6>
                    </div>
                </div>
                <div className="col-4 bg-info">
                    <div className="d-block ">
                        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="img" className="w-100 h-75 pt-5 ps-5 pe-5 " />
                        <div className="text-center pb-5 ">
                            <p className="p-0 m-0 text-dark fs-6 fw-bold">Mua sắm tại SHOPITPRICECHEAP
                            </p>
                            <p className="p-0 m-0 text-dark fs-6 fw-bold">Siêu ưu đãi mỗi ngày</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default LoginPage;