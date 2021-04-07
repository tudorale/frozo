import React from 'react'
import "../../style/css/main.css";
import Logo from "../../images/2.png";

function Navigation() {

    let status = false;
    const handleMobile = () => {
        status = !status;
        let nav = document.querySelector(".navigationContent");
        let addon = document.querySelector(".addon");

        if(status){
            nav.style.display = "block";
            addon.style.opacity = "0.7";
            addon.style.zIndex = "998";
        }
    }

    const handleClose = () => {
        let nav = document.querySelector(".navigationContent");
        let addon = document.querySelector(".addon");

        nav.style.display = "none";
        addon.style.opacity = "0";
        addon.style.zIndex = "-2";

        status = false;
    }

    return (
        <>
            <div className="addon" onClick={handleClose}></div>
            <div className="navigation">
                <div className="logo">
                    <a href="/"><img src={Logo} alt="Frozo Logo"/></a>
                </div> 

                <div className="hamburger" onClick={handleMobile}>
                    <div className="line1 line"></div>
                    <div className="line2 line"></div>
                    <div className="line3 line"></div>
                </div>

                <div className="navigationContent">

                    <div className="closeNav" onClick={handleClose}>
                        <div className="x x1"></div>
                        <div className="x x2"></div>
                    </div>

                    <ul>
                        <a href="#products"><li>Our Products</li></a>
                        <a href="#delivery"><li>Delivery and printing</li></a>
                        <a href="#about"><li>About Us</li></a>
                        <a href="#contact"><li>Contact Us</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigation
