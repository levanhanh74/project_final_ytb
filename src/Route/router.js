import HomePage from "../pages/HomePage/homePage";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import OrderPage from "../pages/OrderPage/orderPage";

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
        page: NotFoundPage,
        path: "/*",
        isNotFound: false,
    },
]
export default routePage;