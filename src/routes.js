import HomePage from "./pages/HomePage";
// import { SignInPage } from "./pages/SignInPage";
import { ProductsPage } from "./pages/ProductsPage";
import { OrderPage } from "./pages/OrderPage";
import {SignUp} from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { DetailProductPage } from "./pages/DetailProductPage";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    // { path: "/login", element: <SignInPage /> },
    { path: "/orders", element:  <OrderPage/> },
    { path: "/products", element: <ProductsPage/> },
    { path: "/products/:productId", element:  <DetailProductPage/> },
    { path: "/signin", element: <SignIn/> },
    { path: "/signup", element: <SignUp/> },
]

export default routerList;