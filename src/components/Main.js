import React, {useState, useEffect} from 'react'
import "../style/css/main.css";
import Navigation from './subComponents/Navigation';
import Hoodie from "../images/hoodie.jpg";
import Tee from "../images/tee.jpg";
import About from "../images/34.jpg";
import emailjs from "emailjs-com";

import Fck from "../images/hoodieFuck.jpg";
import teeFck from "../images/teeFuck.jpg";

import game from "../images/game.jpg"

import liberty from "../images/liberty.jpg"

import { HashLink } from 'react-router-hash-link';

function Main() {

    const [emailStatus, setEmailStatus] = useState("")
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState({name: "", email: "", message: ""})

    const [firstPrice, setFirstPrice] = useState("$32.20 USD")
    const [secondPrice, setSecondPrice] = useState("$32.20 USD")
    const [thirthPrice, setThirthPrice] = useState("$26.00 USD")
    const [forthPrice, setForthPrice] = useState("$22.50 USD")

    useEffect(() => {
        setData({
            name: name,
            email: email,
            message: message,
        })
    }, [email,name,message])
    
    const changeImage = (selector, newImage, price) => {
        let img = document.querySelector(`#${selector}`);
        if(newImage){
            img.src = newImage;
        }

        if(selector === "hoodie"){
            setFirstPrice(price);
        }

        if(selector === "fuck"){
            setSecondPrice(price);
        }
    }

    const changeImageBack = (selector, oldImage, price) => {
        let img = document.querySelector(`#${selector}`);
        if(oldImage){
            img.src = oldImage;
        }

        if(selector === "hoodie"){
            setFirstPrice(price);
        }

        if(selector === "fuck"){
            setSecondPrice(price);
        }
    }
    
    const handleFocus = (label, pxUp) => {
        let l = document.querySelector(`${label}`);
        if(l){
          l.style.marginTop = `${pxUp}`;
          l.style.fontSize = "1rem";
        }
    }
    
    const handleBlur = (input, label, pxDown) => {
        let l = document.querySelector(`${label}`);
        let i = document.querySelector(`${input}`).value;
        if(l){
          if(i === ""){
            l.style.marginTop = `${pxDown}`;
            l.style.fontSize = "1.1rem";
          }else{
            return;
          }   
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        let l1 = document.querySelector(`#label1`)
        let l2 = document.querySelector(`#label2`);
        let l3 = document.querySelector(`#label3`)
        let loading = document.querySelector(".loading");
        if(loading){
            loading.style.opacity = "1";
            loading.style.zIndex = "112";
        }
        emailjs.send('service_dq3wdlp', 'template_gtlbneq', data, 'user_kP27t7AJRQovXg7lgsKqk')
        .then(() => {
            e.target.reset();
            setEmailStatus("Your email has been sent, as soon as we can we will respond. Thank you!")
            loading.style.opacity = "0";
            loading.style.zIndex = "-1";
            if(l1){
                l1.style.marginTop = "10px";
                l2.style.marginTop = "10x";
                l3.style.marginTop = "10px";
            }

        }, () => {
            loading.style.opacity = "0";
            loading.style.zIndex = "-1";
            setEmailStatus("Something went wrong, try again or check the inputs.")
        });
    }


    return (
        <>
            
            <div className="website">
                <Navigation />
                <div className="hero">
                    <div className="backgroundImage"></div>
                    <h1>"Get the ice and the drip from us and the trash from others" <div className="lineAddon"></div></h1>
                    <p>Frozo "Packing that ice" Tee</p>
                    
                    <div className="scroll">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                        </svg>
                    </div>
                </div>

                <div className="wrapper">
                    <h1 id="products">Our Products</h1>
                    <div className="productsGrid">
                        <div className="product">
                            <img src={Hoodie} alt="" onMouseEnter={() => changeImage("hoodie", Tee, "$26.00 USD")} onMouseOut={() => changeImageBack("hoodie", Hoodie, "$32.20 USD")} id="hoodie" />
                            <h1>Frozo "Packing that ice" Hoodie / Tee</h1>
                            <p>All sizes available</p>
                            <a href="https://teespring.com/frozo-logo-hoodie" target="_blank" rel="noreferrer"><button>Details & Buy</button></a>
                            <h1 className="price">{firstPrice}</h1>
                        </div>

                        <div className="product">
                            <img src={Fck} alt="" id="fuck" onMouseEnter={() => changeImage("fuck", teeFck, "$26.00 USD")} onMouseOut={() => changeImageBack("fuck", Fck, "$32.20 USD")}/>
                            <h1>"Fuck the World!" Hoodie / Tee</h1>
                            <p>All sizes available</p>
                            <a href="https://teespring.com/fvck-the-world-collection" target="_blank" rel="noreferrer"><button>Details & Buy</button></a>
                            <h1 className="price">{secondPrice}</h1>
                        </div>
                       
                        <div className="product">
                            <img src={game} alt="" />
                            <h1>Statue of David "game over" Tee</h1>
                            <p>All sizes available, different colors</p>
                            <a href="https://teespring.com/statue-of-david-tee" target="_blank" rel="noreferrer"><button>Details & Buy</button></a>
                            <h1 className="price">{thirthPrice}</h1>
                        </div>

                        <div className="product">
                            <img src={liberty} alt="" />
                            <h1>"Liberty or Death" Tee</h1>
                            <p>All sizes available</p>
                            <a href="https://teespring.com/get-liberty-or-death-tee" target="_blank" rel="noreferrer"><button>Details & Buy</button></a>
                            <h1 className="price">{forthPrice}</h1>
                            <p className="special">SPECIAL OFFER</p>
                        </div>
                    </div>
                    
                    <h1 id="about">About Us & Frozo</h1>
                    <div className="about">
                        
                        <div className="box1">
                            <img alt="" src={About}/>
                        </div>
                        <div className="box2">
                            <p>Frozo started on 8 April 2021 from a project at school and then we chose to continue with the business, <a href="https://tudorale.github.io/portfolio/" target="_blank" rel="noreferrer">Tudor Alexandru</a>, Bogdan Serban, Alexandra Podaru and Lavinia Marcuta who are the founders of Frozo, put their creativity into clothes design, we created the website and founded the perfect designs that fit with your outfits. Frozo is in partnership with <a href="https://teespring.com/"  target="_blank" rel="noreferrer">TeeSpring</a>, a company that is printing your design on clothes, they will handle the delivery and the payment. Each product that you are buying is created just for you. For more details about them and their policy and delivery, we suggest you to visit their: <a href="https://teespring.com/policies/terms" target="_blank" rel="noreferrer">Terms of Service</a>, <a href="https://teespring.com/policies/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>, <a href="https://answers.teespring.com/article/shipping-costs/?_ga=2.204203797.460120262.1617929133-1476994601.1617171883" target="_blank" rel="noreferrer">Shipping</a>, <a target="_blank" href="https://answers.teespring.com/article/returns-and-cancellations/?_ga=2.27330105.460120262.1617929133-1476994601.1617171883" rel="noreferrer">Return And Cancellations</a></p>
                        </div>
                    </div>
                
                    <h1 id="contact">Contact Us</h1>
                    <div className="contact">
                        <form onSubmit={handleSubmit} id="form">
                            <div className="name">
                                <label htmlFor="name" id="label1">Name</label>
                                <input id="name" required type="text" onChange={e => setName(e.target.value)} onFocus={() => handleFocus("#label1", "-8px")} onBlur={() => handleBlur("#name", "#label1", "10px")} />
                            </div>
                            
                            <div className="email">
                                <label htmlFor="email" id="label2">E-mail</label>
                                <input id="email" required type="email"onChange={e => setEmail(e.target.value)} onFocus={() => handleFocus("#label2", "-8px")} onBlur={() => handleBlur("#email", "#label2", "10px")}/>
                            </div>

                            <div className="message">
                                <label htmlFor="message" id="label3">Message</label>
                                <textarea id="message" onChange={e => setMessage(e.target.value)} onFocus={() => handleFocus("#label3", "-8px")} onBlur={() => handleBlur("#message", "#label3", "10px")}>
                                </textarea>
                            </div>
                            
                            <button>Send to Us</button>
                            <div className="loading"></div>
                            <p className="status">{emailStatus}</p>
                        </form>
                    </div>
                
                </div>

                <div className="footer">
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="logoFooter" viewBox="0 0 255.618 78.652" width="255.618pt" height="78.652pt"><defs><clipPath id="_clipPath_ToSSfJp1FH5Kzvyh4BUkiihg0fLEyu6x"><rect width="255.618" height="78.652"/></clipPath></defs><g clipPath="url(#_clipPath_ToSSfJp1FH5Kzvyh4BUkiihg0fLEyu6x)"><rect width="255.618" height="78.652" style={{fill: "white"}} fillOpacity="0"/><g><path d=" M 64.341 38.213 L 63.056 45.446 L 46.378 45.446 L 43.269 63.23 L 34.512 63.23 L 42.074 19.712 L 69.631 19.712 L 68.346 26.975 L 49.576 26.975 L 47.603 38.213 L 64.341 38.213 Z  M 93.162 63.23 L 88.021 47.299 L 80.907 47.299 L 78.128 63.23 L 69.37 63.23 L 76.932 19.712 L 91.339 19.742 L 91.339 19.742 Q 98.572 19.742 102.472 23.149 L 102.472 23.149 L 102.472 23.149 Q 106.373 26.556 105.924 32.624 L 105.924 32.624 L 105.924 32.624 Q 105.297 41.59 96.36 45.087 L 96.36 45.087 L 102.487 62.752 L 102.487 63.23 L 93.162 63.23 Z  M 84.434 26.975 L 82.163 40.036 L 88.679 40.096 L 88.679 40.096 Q 92.146 40.036 94.402 38.228 L 94.402 38.228 L 94.402 38.228 Q 96.659 36.42 97.107 33.311 L 97.107 33.311 L 97.107 33.311 Q 97.526 30.412 96.181 28.768 L 96.181 28.768 L 96.181 28.768 Q 94.836 27.124 91.906 27.005 L 91.906 27.005 L 84.434 26.975 Z  M 127.094 63.828 L 127.094 63.828 L 127.094 63.828 Q 122.76 63.738 119.457 61.78 L 119.457 61.78 L 119.457 61.78 Q 116.154 59.823 114.227 56.131 L 114.227 56.131 L 114.227 56.131 Q 112.299 52.44 112 47.658 L 112 47.658 L 112 47.658 Q 111.671 42.756 113.046 37.197 L 113.046 37.197 L 113.046 37.197 Q 114.421 31.637 117.469 27.423 L 117.469 27.423 L 117.469 27.423 Q 120.518 23.209 124.628 21.116 L 124.628 21.116 L 124.628 21.116 Q 128.737 19.024 133.52 19.114 L 133.52 19.114 L 133.52 19.114 Q 137.913 19.203 141.201 21.191 L 141.201 21.191 L 141.201 21.191 Q 144.489 23.179 146.372 26.9 L 146.372 26.9 L 146.372 26.9 Q 148.255 30.621 148.524 35.344 L 148.524 35.344 L 148.524 35.344 Q 148.823 40.604 147.388 46.163 L 147.388 46.163 L 147.388 46.163 Q 145.954 51.723 142.935 55.788 L 142.935 55.788 L 142.935 55.788 Q 139.916 59.853 135.866 61.885 L 135.866 61.885 L 135.866 61.885 Q 131.816 63.917 127.094 63.828 Z  M 139.288 41.889 L 139.497 40.275 L 139.737 37.436 L 139.737 37.436 Q 140.036 32.115 138.317 29.366 L 138.317 29.366 L 138.317 29.366 Q 136.598 26.616 133.101 26.497 L 133.101 26.497 L 133.101 26.497 Q 127.632 26.317 124.419 31.338 L 124.419 31.338 L 124.419 31.338 Q 121.205 36.36 120.787 45.386 L 120.787 45.386 L 120.787 45.386 Q 120.488 50.677 122.192 53.531 L 122.192 53.531 L 122.192 53.531 Q 123.895 56.385 127.482 56.505 L 127.482 56.505 L 127.482 56.505 Q 132.175 56.714 135.253 52.844 L 135.253 52.844 L 135.253 52.844 Q 138.332 48.973 139.288 41.889 L 139.288 41.889 Z  M 188.942 25.301 L 162.938 55.967 L 184.1 56.027 L 182.844 63.23 L 150.624 63.23 L 151.61 57.521 L 177.644 27.034 L 156.931 26.975 L 158.216 19.712 L 189.928 19.712 L 188.942 25.301 Z  M 207.301 63.828 L 207.301 63.828 L 207.301 63.828 Q 202.968 63.738 199.665 61.78 L 199.665 61.78 L 199.665 61.78 Q 196.362 59.823 194.434 56.131 L 194.434 56.131 L 194.434 56.131 Q 192.507 52.44 192.208 47.658 L 192.208 47.658 L 192.208 47.658 Q 191.879 42.756 193.254 37.197 L 193.254 37.197 L 193.254 37.197 Q 194.629 31.637 197.677 27.423 L 197.677 27.423 L 197.677 27.423 Q 200.726 23.209 204.836 21.116 L 204.836 21.116 L 204.836 21.116 Q 208.945 19.024 213.728 19.114 L 213.728 19.114 L 213.728 19.114 Q 218.121 19.203 221.409 21.191 L 221.409 21.191 L 221.409 21.191 Q 224.697 23.179 226.58 26.9 L 226.58 26.9 L 226.58 26.9 Q 228.463 30.621 228.732 35.344 L 228.732 35.344 L 228.732 35.344 Q 229.031 40.604 227.596 46.163 L 227.596 46.163 L 227.596 46.163 Q 226.161 51.723 223.143 55.788 L 223.143 55.788 L 223.143 55.788 Q 220.124 59.853 216.074 61.885 L 216.074 61.885 L 216.074 61.885 Q 212.024 63.917 207.301 63.828 Z  M 219.496 41.889 L 219.705 40.275 L 219.944 37.436 L 219.944 37.436 Q 220.243 32.115 218.525 29.366 L 218.525 29.366 L 218.525 29.366 Q 216.806 26.616 213.309 26.497 L 213.309 26.497 L 213.309 26.497 Q 207.839 26.317 204.626 31.338 L 204.626 31.338 L 204.626 31.338 Q 201.413 36.36 200.995 45.386 L 200.995 45.386 L 200.995 45.386 Q 200.696 50.677 202.4 53.531 L 202.4 53.531 L 202.4 53.531 Q 204.103 56.385 207.69 56.505 L 207.69 56.505 L 207.69 56.505 Q 212.383 56.714 215.461 52.844 L 215.461 52.844 L 215.461 52.844 Q 218.54 48.973 219.496 41.889 L 219.496 41.889 Z " fill="rgb(121,178,226)"/><path d=" M 40.178 20.877 L 42.071 17.692 L 44.826 18.467 Q 44.309 19.844 46.031 18.553 Q 47.752 17.261 49.732 17.003 L 52.143 17.175 L 53.262 18.036 Q 54.897 18.811 55.5 18.381 Q 56.102 17.95 59.287 17.175 L 62.644 16.659 L 64.624 16.831 L 67.551 17.434 L 70.133 18.294 L 70.478 19.069 L 70.65 20.36 L 71.941 22.082 L 68.326 20.877 Q 66.604 20.36 66.088 20.446 Q 65.571 20.533 62.3 21.135 Q 60.664 20.446 59.632 20.446 C 58.599 20.446 55.155 20.877 54.553 21.049 Q 53.95 21.221 47.236 22.082 L 43.104 22.34 L 40.522 22.168 Q 38.37 20.877 39.059 20.877 Q 39.747 20.877 40.178 20.877 Z " fill="rgb(255,255,255)"/><path d=" M 48.269 37.965 Q 49.34 36.894 51.432 36.027 L 52.962 38.374 Q 57.451 36.741 56.737 36.129 Q 56.023 35.517 60.41 35.925 L 65.102 36.639 L 64.49 38.782 L 61.43 38.884 L 56.431 39.598 L 54.186 40.822 L 51.432 40.21 L 50.411 38.68 Q 47.198 39.037 48.269 37.965 Z " fill="rgb(255,255,255)"/><path d=" M 75.687 20.341 L 76.146 22.178 L 78.671 21.642 L 80.584 20.418 L 85.787 22.178 L 90.608 21.489 L 93.668 22.56 L 96.117 20.877 L 97.57 21.719 L 98.795 22.713 L 101.32 24.779 L 103.462 26.157 L 104.074 24.626 L 105.528 24.856 L 104.687 22.943 L 103.003 21.03 Q 103.615 19.806 101.396 19.194 Q 99.177 18.581 95.505 17.51 Q 94.357 18.581 93.592 18.429 C 92.827 18.275 91.296 17.816 91.296 17.204 Q 91.296 16.592 88.236 16.362 L 85.634 17.663 L 84.104 17.663 Q 82.191 17.434 81.655 17.663 Q 81.12 17.893 79.742 18.505 L 77.83 18.429 L 75.687 20.341 Z " fill="rgb(255,255,255)"/><path d=" M 82.931 39.712 L 84.308 38.718 L 85.035 39.636 L 88.975 39.215 L 90.047 38.182 L 92.189 37.685 L 94.255 36.575 L 95.288 36.92 L 94.676 38.297 L 92.342 39.789 Q 92.227 41.09 91.845 41.013 Q 91.462 40.937 89.779 40.554 L 87.56 41.358 L 84.423 41.319 Q 83.504 41.013 83.237 41.319 Q 82.969 41.625 82.51 42.352 L 81.553 41.319 Q 81.477 40.248 81.821 40.248 Q 82.165 40.248 82.931 39.712 Z " fill="rgb(255,255,255)"/><path d=" M 121.8 53.16 L 123.328 56.144 L 122.656 57.12 L 123.145 57.923 L 124.001 58.325 L 124.551 59.3 L 127.057 58.727 L 128.462 57.636 Q 128.951 57.349 129.623 56.948 Q 130.296 56.546 131.64 56.03 L 133.902 55.341 L 134.024 53.964 L 132.435 53.906 L 130.968 53.103 L 130.235 53.791 Q 129.135 54.136 128.584 54.48 Q 128.034 54.824 127.24 55.398 L 126.384 54.595 L 124.856 54.882 L 123.573 53.906 L 121.8 53.16 Z " fill="rgb(255,255,255)"/><path d=" M 124.402 20.775 Q 120.844 23.97 125.932 18.862 C 126.902 16.822 129.227 20.119 128.993 19.933 Q 127.412 18.53 131.059 17.026 L 134.349 17.026 L 139.323 17.791 Q 139.093 18.939 139.705 19.168 Q 140.317 19.398 143.837 21.081 Q 144.985 22.076 145.291 22.611 Q 145.597 23.147 146.056 24.907 L 145.75 26.131 L 143.837 25.366 L 141.618 25.06 Q 140.853 24.448 140.317 23.835 Q 139.782 23.223 135.956 21.081 Q 133.814 20.392 133.354 20.545 C 132.895 20.698 131.901 21.081 130.906 21.081 Q 129.911 21.081 127.08 21.387 C 119.735 24.371 124.23 20.756 124.402 20.775 Z " fill="rgb(255,255,255)"/><path d=" M 157.533 20.392 L 160.517 21.923 L 163.272 19.857 L 165.185 21.234 L 169.24 21.387 L 171.077 20.01 L 173.296 21.923 L 175.055 22.535 L 175.821 23.223 L 177.045 21.923 L 178.499 22.458 L 181.024 21.387 L 182.554 20.469 L 183.931 21.693 L 185.768 21.846 L 188.139 22.764 L 188.293 23.223 L 190.282 22.535 L 190.282 20.316 C 190.5 19.338 188.905 19.78 188.063 19.551 Q 187.377 19.216 185.538 17.944 L 183.013 18.556 L 178.499 16.872 L 175.208 18.403 L 171.612 17.867 L 170.923 16.49 L 169.24 18.173 L 165.108 17.485 Q 162.583 18.556 161.971 18.556 C 161.359 18.556 158.681 17.867 158.222 18.173 Q 157.763 18.479 157.533 20.392 Z " fill="rgb(255,255,255)"/><path d=" M 162.904 56.009 L 164.625 57.257 L 166.39 56.611 L 167.251 57.558 L 168.112 57.73 L 170.393 56.697 L 171.038 57.773 Q 173.664 58.075 174.223 57.687 Q 174.783 57.3 176.117 56.913 L 177.279 57.773 L 180.636 57.214 L 181.066 57.946 L 182.401 57.171 L 183.606 57.472 L 184.51 56.827 L 185.758 56.783 L 183.821 55.234 Q 180.692 54.544 181.669 56.396 Q 181.891 55.87 179.474 55.32 L 174.051 54.244 L 171.426 55.363 L 167.165 54.545 L 165.357 55.019 L 162.904 56.009 Z " fill="rgb(255,255,255)"/><path d=" M 156.869 26.952 L 156.243 30.587 L 157.346 33.436 L 157.457 32.005 L 158.217 35.575 L 158.054 37.692 L 157.833 39.804 L 158.502 38.59 L 158.902 40.117 L 159.405 37.336 L 160.277 34.237 Q 159.71 32.64 159.684 32.235 Q 159.658 31.83 160.649 30.18 L 160.236 28.076 L 160.033 26.966 L 156.869 26.952 Z " fill="rgb(255,255,255)"/><path d=" M 212.395 19.474 L 216.909 21.234 Q 218.363 20.698 218.822 21.31 Q 219.281 21.923 220.047 23.529 L 222.266 24.142 L 223.643 25.289 L 224.944 28.656 L 226.55 28.962 L 226.55 32.023 L 227.545 35.389 L 226.397 37.838 L 228.234 38.45 L 230.988 40.516 L 230.223 37.226 L 229.994 34.242 Q 229.534 32.941 229.917 32.252 C 230.3 31.564 230.376 30.645 229.764 29.957 C 229.152 29.268 227.775 29.498 228.616 28.809 Q 229.458 28.12 228.31 25.213 L 226.856 24.142 L 226.015 22.152 Q 224.408 20.775 223.719 20.469 C 223.031 20.163 221.5 20.086 221.194 19.551 C 220.888 19.015 220.2 16.567 219.205 16.567 Q 218.21 16.567 215.073 17.026 L 212.471 17.867 L 210.865 18.25 L 210.1 18.632 L 207.421 19.168 L 205.508 19.78 L 205.279 21.616 Q 206.656 21.081 207.881 20.622 C 209.105 20.163 209.411 20.545 210.1 20.545 Q 210.788 20.545 212.395 19.474 Z " fill="rgb(255,255,255)"/><path d=" M 200.643 40.363 L 199.84 43.997 C 200.018 45.327 201.306 45.081 201.064 45.145 Q 199.375 45.652 200.223 48.014 Q 200.911 49.927 201.026 50.233 Q 201.141 50.54 201.179 52.146 L 201.332 54.289 L 203.245 55.092 L 205.005 56.469 L 206.076 57.541 Q 207.109 56.699 207.836 56.928 Q 208.563 57.158 210.743 57.349 Q 213.613 54.518 211.509 55.245 Q 209.405 55.972 207.377 54.748 Q 206.497 55.475 206.344 55.13 Q 206.191 54.786 205.77 53.217 L 204.316 52.146 Q 203.895 51.572 203.934 51.113 Q 203.972 50.654 203.054 49.277 L 202.977 46.943 Q 203.36 45.987 203.13 45.681 C 202.901 45.375 202.748 44.342 203.054 44.189 Q 203.36 44.036 202.671 41.931 Q 202.594 40.822 202.518 40.554 C 202.442 40.286 202.709 37.417 201.676 38.909 Q 200.643 40.401 200.643 40.363 Z " fill="rgb(255,255,255)"/></g></g></svg>
                    </a>

                    <a href="https://teespring.com/" rel="noreferrer" target="_blank">
                        <svg viewBox="0 0 79 16" className="tsLogo" xmlns="http://www.w3.org/2000/svg"><path d="M4.6915 16C3.46442 16 1.7315 15.642 0 14.0868L1.35885 12.5784C3.78607 14.7604 6.31531 13.8986 7.09746 13.1699C7.15272 13.119 7.20515 13.068 7.25475 13.0157C4.69858 12.7666 2.82963 10.9582 2.70069 10.8308C0.741061 8.90776 0.297558 6.29274 1.69041 4.8791C3.08185 3.46688 5.70461 3.86451 7.66282 5.78474C7.83427 5.94888 9.7429 7.81675 10.1198 10.187C11.2335 9.35633 11.9406 8.02901 11.9406 6.57009C11.9406 5.34465 11.4673 4.20978 10.6086 3.37632C9.71456 2.50747 8.45631 2.02919 7.06487 2.02919V0C8.98767 0 10.7489 0.682055 12.0256 1.92164C13.281 3.14142 13.9725 4.79278 13.9725 6.57009C13.9725 9.26293 12.3132 11.6445 9.89026 12.6279C9.61395 13.3609 9.14495 14.0387 8.48465 14.6543C7.83711 15.2571 6.57178 15.9264 4.9593 15.9943C4.87286 15.9986 4.7836 16 4.6915 16ZM3.83708 6.05218C3.55369 6.05218 3.30998 6.12859 3.13994 6.30264C2.63976 6.81065 2.95574 8.23844 4.12755 9.38887C4.12897 9.39029 4.1318 9.39312 4.13322 9.39453C4.15022 9.4101 5.98375 11.1874 8.15309 11.0049C8.15309 11.0034 8.15309 11.002 8.15309 11.0006C8.163 9.08464 6.27847 7.26913 6.25863 7.25073C6.25438 7.24648 6.24872 7.24224 6.24588 7.23799C5.55016 6.55452 4.56255 6.05218 3.83708 6.05218Z" fill="currentColor"></path><path d="M27.5029 5.73243C27.3895 5.11689 26.8809 4.15606 25.4568 4.16031C24.397 4.16456 23.7041 4.8452 23.7069 5.5881C23.7097 6.20365 24.1065 6.69184 24.9297 6.8475L26.4969 7.14183C28.5373 7.52955 29.634 8.85121 29.6396 10.4304C29.6453 12.1511 28.2128 13.8945 25.6042 13.9029C22.6314 13.9143 21.3123 12.0082 21.1323 10.4134L23.1543 9.86863C23.2535 10.9738 24.0314 11.9657 25.6127 11.9601C26.7831 11.9558 27.4292 11.3686 27.4264 10.579C27.4235 9.93231 26.9319 9.42855 26.0619 9.25733L24.4947 8.94743C22.7065 8.59084 21.5475 7.44182 21.5418 5.75224C21.5347 3.76268 23.3158 2.24008 25.4342 2.23301C28.1533 2.2231 29.2032 3.86173 29.4611 5.12396L27.5029 5.73243Z" fill="currentColor"></path><path d="M33.906 9.42002L33.9216 13.6369L31.7395 13.6454L31.697 2.44806L35.8869 2.43249C38.1002 2.424 39.5766 3.88717 39.5837 5.90928C39.5908 7.94695 38.1257 9.40446 35.9124 9.41295L33.906 9.42002ZM35.6375 7.53376C36.7286 7.52951 37.3903 6.89557 37.3875 5.93192C37.3832 4.93714 36.7172 4.323 35.6262 4.32725L33.9032 4.33291L33.9145 7.538L35.6375 7.53376Z" fill="currentColor"></path><path d="M44.8321 9.32096L43.6943 9.32521L43.7098 13.6369H41.5122L41.4711 2.44947L45.8508 2.4339C48.0329 2.42541 49.43 3.92112 49.4371 5.86399C49.4428 7.42762 48.5303 8.61485 47.0609 9.04644L49.481 13.6171L47.0453 13.6256L44.8321 9.32096ZM45.4569 7.43894C46.5636 7.4347 47.2097 6.80076 47.2069 5.88522C47.204 4.93713 46.5522 4.32441 45.4456 4.32866L43.6744 4.33573L43.6858 7.44602L45.4569 7.43894Z" fill="currentColor"></path><path d="M63.5072 13.617L58.3864 5.69274L58.4147 13.6354L56.2326 13.6439L56.1915 2.44803L58.9106 2.43812L63.6021 9.82753L63.5752 2.42114L65.7573 2.41265L65.7984 13.6085L63.5072 13.617Z" fill="currentColor"></path><path d="M53.8141 13.6354L51.632 13.6439L51.5909 2.448L53.7844 2.4381L53.8141 13.6354Z" fill="currentColor"></path><path d="M76.9796 13.4954L76.8322 12.2162C76.3292 12.9761 75.2254 13.7374 73.5336 13.7444C70.5141 13.7557 67.9282 11.5539 67.914 7.93847C67.9012 4.32159 70.5963 2.08581 73.6328 2.07449C76.5743 2.06317 78.2095 3.77963 78.7692 5.49892L76.6849 6.24889C76.3972 5.25553 75.4592 4.10509 73.6413 4.11216C71.9494 4.11782 70.1188 5.27817 70.1287 7.93139C70.1386 10.4587 71.8035 11.7634 73.6852 11.7563C75.7568 11.7492 76.5588 10.3568 76.682 9.56578L73.1397 9.57851L73.1326 7.68376L78.7295 7.66395L78.7508 13.4911L76.9796 13.4954Z" fill="currentColor"></path></svg>
                    </a>

                    <div className="bottomLinks">
                        <p>Copyright ?? 2021 Frozo</p>
                        <a href="/frozo/#/terms">Terms of Conditions</a>
                        <a href="/frozo/#/policy">Privacy Policy</a>
                    </div>

                    <div className="rightLinks">
                        <h1>Fast navigation</h1>
                        <HashLink smooth to="/#products">Products</HashLink>
                        <HashLink smooth to="/#about">About Us & Froze</HashLink>
                        <HashLink smooth to="/#contact">Contact Us</HashLink>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main
