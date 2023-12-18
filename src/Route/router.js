import HomePage from "../pages/HomePage/homePage";
import LoginPage from "../pages/LoginPage/loginPage";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import OrderPage from "../pages/OrderPage/orderPage";
import ProductPage from "../pages/ProductPage/productPage";
import SignUpPage from "../pages/SignUpPage/signUpPage";
import TypeProductPage from "../pages/TypeProductPage/typeProductPage";

const routePage = [
    {
        page: HomePage,
        path: "/",
        isNotFound: true,
    },
    {
        page: OrderPage,
        path: "/oder",
        isNotFound: true,
    },
    {
        page: TypeProductPage,
        path: "/typePrd",
        isNotFound: true,
    },
    {
        page: SignUpPage,
        path: "/signup",
        isNotFound: true,
    },
    {
        page: LoginPage,
        path: "/login",
        isNotFound: true,
    },
    {
        page: ProductPage,
        path: "/product",
        isNotFound: true,
    },
    {
        page: NotFoundPage,
        path: "/*",
        isNotFound: false,
    },
]
export default routePage;