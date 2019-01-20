import React from "react";
import "./style.css";

const Navbar = props => (
    <nav className="navBar">
        <div className="mobTitle">
            <a href="/clicky-game/">{props.title}</a>
        </div>

        <div id="cScore">Current Score: {props.cScore}</div>

        <div id="tScore">Top Score: {props.highScore}</div>
    </nav>
);

export default Navbar;