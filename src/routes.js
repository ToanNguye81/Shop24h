import HomePage from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { OrderPage } from "./pages/OrderPage";
import {SignUp} from "./pages/SignUp";
import SignInPage from "./pages/SignInPage";
import { DetailProductPage } from "./pages/DetailProductPage";
import { ProfilePage } from "./pages/ProfilePage";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/orders", element:  <OrderPage/> },
    { path: "/products", element: <ProductsPage/> },
    { path: "/products/:productId", element:  <DetailProductPage/> },
    { path: "/signin", element: <SignInPage/> },
    { path: "/profile", element: <ProfilePage/> },
    { path: "/signup", element: <SignUp/> },
]

export default routerList;