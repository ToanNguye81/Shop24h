import HomePage from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";

const routerList = [
    { path: "/", element:  <HomePage /> },
    { path: "/homepage", element:  <HomePage /> },
    { path: "/login", element: <SignInPage /> },
]

export default routerList;