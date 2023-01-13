import HomePage from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { ProductList } from "./pages/ProductList";
import { DetailProduct } from "./pages/DetailProduct";
import { OrderPage } from "./pages/OrderPage";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/detail-product/:productId", element:  <DetailProduct/> },
    { path: "/orders", element:  <OrderPage/> },
    { path: "/products", element: <ProductList/> },


    // { path: "/brand", element:  <Brand /> },
    // { path: "/jordan", element: <SignInPage /> },
    // { path: "/yeezy", element: <SignInPage /> },
    // { path: "/sale", element: <SignInPage /> },
    // { path: "/blog", element: <SignInPage /> },
    // { path: "/about", element: <SignInPage /> },
    // { path: "/contact", element: <SignInPage /> },
]

export default routerList;