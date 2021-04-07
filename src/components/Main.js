import React from 'react'
import "../style/css/main.css";
import Navigation from './subComponents/Navigation';

function Main() {


    return (
        <>
            
            <div className="website">
                <Navigation />
                <div className="hero">
                    <div className="backgroundImage"></div>
                    <h1>CEVA TEXT REPREZENTATIV NUJ FROZO BEST BIG BIG BIG</h1>
                    <div className="scroll">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                        </svg>
                    </div>
                </div>

                <div className="wrapper">
                    <h1 id="products">Our Products</h1>
                </div>
            </div>
        </>
    )
}

export default Main
