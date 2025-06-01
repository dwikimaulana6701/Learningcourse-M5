import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePages from "../pages/HomePages";
import AllProduct from "../pages/AllProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/beranda",
        element: <HomePages />,
    },
    {
        path: "/semua-produk",
        element: <AllProduct />,
    },
]);
