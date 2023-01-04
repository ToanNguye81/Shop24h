import HomePage from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/login", element: <SignInPage /> },
    { path: "/adidas", element:  <HomePage /> },
    { path: "/jordan", element: <SignInPage /> },
    { path: "/yeezy", element: <SignInPage /> },
    { path: "/sale", element: <SignInPage /> },
    { path: "/blog", element: <SignInPage /> },
    { path: "/about", element: <SignInPage /> },
    { path: "/contact", element: <SignInPage /> },
]

export default routerList;