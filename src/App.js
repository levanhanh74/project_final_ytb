import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import routePage from './Route/router';
import DefaultComponent from './components/DeFaultComponent/DefaultComponent';
import NotFoundPage from './pages/NotFoundPage/notFoundPage';

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
