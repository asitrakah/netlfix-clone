import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(true);

    const body = document.querySelector("body");

    function bodystyle(e) {
        document.body.classList.add('disabled');

    }

    function removestyle(e) {
        document.body.classList.remove('disabled');

    }

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);

        } else {
            handleShow(false);
        }
    }
    const logout = () => {
        localStorage.setItem('emailCo', '');
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"} `}>
            <div className="nav__contents">
                <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

                <div className="nav__menu">
                    <ul className="nav__menuList">
                        <div className={open ? "icon cancel-btn hide " : "icon cancel-btn"} onClick={() => { setOpen(!open); removestyle() }}>
                            <i className="fas fa-times"></i>
                        </div>
                        <li><a href="#">HOME </a></li>
                        <li><a href="#" onClick={logout}>MENU </a></li>

                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Nav
