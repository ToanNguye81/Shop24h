import HomePage from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { ProductList } from "./pages/ProductList";
import { ProductInfo } from "./pages/ProductInfo";
import { OrderPage } from "./pages/OrderPage";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/products", element: <ProductList/> },
    { path: "/products/:productId", element:  <ProductInfo/> },
    { path: "/orders", element:  <OrderPage/> },

    // { path: "/brand", element:  <Brand /> },
    // { path: "/jordan", element: <SignInPage /> },
    // { path: "/yeezy", element: <SignInPage /> },
    // { path: "/sale", element: <SignInPage /> },
    // { path: "/blog", element: <SignInPage /> },
    // { path: "/about", element: <SignInPage /> },
    // { path: "/contact", element: <SignInPage /> },
]

export default routerList;