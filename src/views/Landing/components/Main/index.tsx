import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import CatImg from "../../../../assets/icons/WraithFinance.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={CatImg} alt="" />
            </div>
            <div className="landing-main-btns-wrap">
                <Link href="http://app.localhost:3000" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Enter App</p>
                    </div>
                </Link>
                <Link href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                <p>Reserve Currency</p>
                <p>On Fantom</p>
            </div>
        </div>
    );
}

export default Main;
