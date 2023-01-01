import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
export const SignInNav = () => {

    const navigate = useNavigate();
    const onBtnClickSignIn = (path) => {
        navigate(path)
    }
    const { photoURL } = useSelector((reduxData) => reduxData.signInReducer );
    return (
        <div className="px-3 py-2 mb-5 bg-hor">
            <div className="container d-flex flex-wrap justify-content-center">
                <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                  
                    <button type="button" className="btn btn-light text-dark me-2" onClick={() => onBtnClickSignIn("/signin")}>Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                    {photoURL === null ?null
                        : 
                            <img src={photoURL} className="btn" width={"70"}/>
                    }
                </div>
            </div>
        </div>
    )
}