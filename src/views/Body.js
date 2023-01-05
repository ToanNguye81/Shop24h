import routes from "../routes";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Content = () => {
    return (
        <div>
            <Routes>
                {routes.map((router, index) => {
                    if (router.path) {
                        return <Route key={index} exact path={router.path} element={router.element} ></Route>
                    } else {
                        return null;
                    }

                })}
                <Route path="*" element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}

export default Content;