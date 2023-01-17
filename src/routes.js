import HomePage from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { ProductsPage } from "./pages/ProductsPage";
import { DetailProduct } from "./pages/DetailProduct";
import { OrderPage } from "./pages/OrderPage";
import SignUp from "./pages/SignUp";
import SignIn2 from "./pages/SignIn2";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/detail-product/:productId", element:  <DetailProduct/> },
    { path: "/orders", element:  <OrderPage/> },
    { path: "/products", element: <ProductsPage/> },
    { path: "/signin2", element: <SignIn2/> },
    { path: "/signup", element: <SignUp/> },


    // { path: "/brand", element:  <Brand /> },
    // { path: "/jordan", element: <SignInPage /> },
    // { path: "/yeezy", element: <SignInPage /> },
    // { path: "/sale", element: <SignInPage /> },
    // { path: "/blog", element: <SignInPage /> },
    // { path: "/about", element: <SignInPage /> },
    // { path: "/contact", element: <SignInPage /> },
]

export default routerList;