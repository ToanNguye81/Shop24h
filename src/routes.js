import HomePage from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { Brand } from "./pages/BrandPage";
import { ProductList } from "./pages/ProductList";
import { ProductInfo } from "./pages/ProductInfo";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/products", element: <ProductList/> },
    { path: "/products/:productId", element:  <ProductInfo/> },
    { path: "/titleBrand", element:  <ProductInfo/> },

    { path: "/brand", element:  <Brand /> },
    // { path: "/jordan", element: <SignInPage /> },
    // { path: "/yeezy", element: <SignInPage /> },
    // { path: "/sale", element: <SignInPage /> },
    // { path: "/blog", element: <SignInPage /> },
    // { path: "/about", element: <SignInPage /> },
    // { path: "/contact", element: <SignInPage /> },
]

export default routerList;