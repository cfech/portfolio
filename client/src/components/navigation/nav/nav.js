import React from 'react'
import "./nav.css"
import { NavLink, withRouter } from "react-router-dom"



const nav = (props) => {

let backGroundImageSelector ="topPortion"

if(props.match.path ==="/technologies"){
    backGroundImageSelector ="techTopPortion"
}


    return (
        <div className={backGroundImageSelector}>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center myNav">
                <a data-toggle="tooltip" data-placement="top" title="Go Home" className="navbar-brand namebox ml-lg-5 ml-xs-0" href="/">CONNOR FECH</a>
            </nav>

            <div className="linkS">


                <span className="spanForLink m-lg-2 p-lg-2">

                    <NavLink className="linkTags " to="/" >Home</NavLink>
                </span>
                <span className="spanForLink m-lg-2 p-lg-2">

                    <NavLink className="linkTags " to="/technologies" >Technologies</NavLink>
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

            </div>
        </div>
    )
}


export default withRouter(nav)