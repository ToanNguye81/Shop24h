import HomePage from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { OrderPage } from "./pages/OrderPage";
import { SignUp } from "./pages/SignUp";
import SignInPage from "./pages/SignInPage";
import { DetailProductPage } from "./pages/DetailProductPage";
import { AccountPage } from "./pages/AccountPage";
import { MyOrderPage } from "./pages/MyOrderPage";

const routerList = [
    { path: "/", element: <HomePage /> },
    { path: "/homepage", element: <HomePage /> },
    { path: "/orders", element: <OrderPage /> },
    { path: "/products", element: <ProductsPage /> },
    { path: "/products/:productId", element: <DetailProductPage /> },
    { path: "/signin", element: <SignInPage /> },
    { path: "/account", element: <AccountPage /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/customers/:customerId/orders", element: <MyOrderPage/> },
];

export default routerList;