//Imports
import React from "react";
import "../styles/links.css"


//Nav Component
function Links() {
    return (
        // <nav className="navbar navbar-expand-lg just">
        //     <a className="inline" href="index.html">Resume</a>
        //     <a className="inline" href="index.html">LinkedIn</a>
        //     <a className="inline" href="index.html">Github</a>
        // </nav>

        <div className="linkS">


            <span className="spanForLink m-lg-2 p-lg-2">

                <a className="linkTags " href="/technologies" >Technologies</a>
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

           
            {/* <a className="linkTags " href="/technologies" >Technologies</a>
            <a className="linkTags" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="linkTags" href="https://docs.google.com/document/d/1Z8ZReoZqfaCpZIE4PSoq2dtW8UE3QVBLaz5XxW_RExU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>



            <a className="linkTags " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a> */}


        </div>
    )
}

//Exporting Nav component
export default Links;