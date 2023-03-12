import React from "react"
import auth from "../firebase.config"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { successLogIn } from "../actions/signIn.actions";
import { useDispatch } from "react-redux";
const provider = new GoogleAuthProvider();

export const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [user, setUser] = useState(null)

    const loginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
                dispatch(successLogIn(result.user.photoURL,result.user.displayName, result.user.email))
                // navigate("/homepage")
                navigate(-1)
            })
            .catch((error) => {
                console.log(error)
                setUser(null)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                setUser(result)
            } else {
                setUser(null)
            }
        })
    }, [])
    return (
        <React.Fragment>
            <div class="container-fluid div-background-picture">
                <div >
                    <div class="row d-flex align-items-center min-vh-100">
                        <div class="col-sm-4 text-center mx-auto my-0 jumbotron pt-3 pb-3">
                            <div class="mb-2">
                                <button onClick={loginGoogle} class="btn btn-block form-control btn-danger rounded-pill pb-3 pt-3">
                                    SIGN IN USING GOOGLE+
                                </button>
                                <h2 className="divider line one-line">Or</h2>
                            </div>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control rounded-pill pb-3 pt-3" placeholder="UserName" />
                            </div>

                            <div class="input-group mb-3 ">
                                <input type="password" class="form-control rounded-pill pb-3 pt-3" placeholder="Password" />
                            </div>

                            <div class="mb-5">
                                <a href="#" class="btn btn-block btn-success form-control rounded-pill pb-3 pt-3">
                                    SIGN IN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}