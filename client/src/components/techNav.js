import React from "react";
import "../styles/techNav.css"


//Nav Component
function TechNav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center myTechNav">
            <a data-toggle="tooltip" data-placement="top" title="Go Home" className="navbar-brand namebox ml-lg-5 ml-xs-0" href="/">CONNOR FECH</a>
        </nav>

    )
}

//Exporting Nav component
export default TechNav;
