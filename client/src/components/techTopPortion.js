//Imports
import React from "react";
import "../styles/header.css"


//Nav Component
function Top() {
    return (
        <div className="techTopPortion">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center myNav row">
                <a data-toggle="tooltip" data-placement="top" title="Go Home" className="navbar-brand namebox ml-lg-5 ml-xs-0" href="/">CONNOR FECH</a>
            </nav>

            <div className="linkS">

                <span className="spanForLink m-lg-2 p-lg-2">

                    <a className="linkTags " href="/" >Home</a>
                </span>

                <span className="spanForLink m-lg-2 p-lg-2">

                    <a className="linkTags" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                </span>

                <span className="spanForLink m-lg-2 p-lg-2">

                    <a className="linkTags" href="https://docs.google.com/document/d/18BXcytPTfkACci4s0MPdzPagMqCKndZFH2qNt9IM_hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </span>



                <span className="spanForLink m-lg-2 p-lg-2">

                    <a className="linkTags " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a>

                </span>





                {/* <a className="linkTags " href="/" >Home</a>
                <a className="linkTags" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="linkTags" href="https://docs.google.com/document/d/1Z8ZReoZqfaCpZIE4PSoq2dtW8UE3QVBLaz5XxW_RExU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>



                <a className="linkTags " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a> */}


            </div>
        </div>
    )
}

//Exporting Nav component
export default Top;
