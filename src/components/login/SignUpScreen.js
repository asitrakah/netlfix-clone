import React, { useRef, useEffect, useState } from 'react'
import "./SignUpScreen.css"
import axios from "axios"
import { useDispatch, useStore } from "react-redux"
import { login, selectUser } from '../../features/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [emailCo, setEmailCo] = useState("")


    const dispatch = useDispatch();


    const test = (e) => {
        e.preventDefault();
        axios.post("https://tkl.flow-automation.io/test", { username: emailRef.current.value, password: passwordRef.current.value })
            .then((res) => {
                console.log(res.data);
            })
    }

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/insert", { username: emailRef.current.value, password: passwordRef.current.value })
            .then(() => {
                alert("Tafiditra");
            })
    }
    const signIns = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/api/login",
            {
                username: emailRef.current.value,
                password: passwordRef.current.value
            }).then((res) => {
                if (res.data == "not") {
                    toast("Password not match");
                } else if (res.data == "emailnotFound") {
                    toast("Tsy hita");
                } else {
                    setEmailCo(res.data);
                    //save data to localStaorage
                    localStorage.setItem('emailCo', res.data);
                    dispatch(login({
                        email: res.data
                    }));

                }

            });

    }


    return (
        <div className="signupScreen">

            <form >
                <h1 >Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIns}>Sign In</button>
                <ToastContainer />
                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={test}>Sign Up now. </span>
                </h4>
            </form>

        </div>
    )
}

export default SignUpScreen
