//Imports
import React from "react";
import "../styles/header.css"

//Nav Component
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center myNav">
            <a data-toggle="tooltip" data-placement="top" title="Go Home" className="navbar-brand namebox ml-lg-5 ml-xs-0" href="/React-Portfolio">CONNOR FECH</a>
        </nav>
    )
}

//Exporting Nav component
export default Nav;
