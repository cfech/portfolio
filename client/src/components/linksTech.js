//Imports
import React from "react";
import "../styles/techLinks.css"


//Nav Component
function LinksTech() {
    return (
        // <nav className="navbar navbar-expand-lg just">
        //     <a className="inline" href="index.html">Resume</a>
        //     <a className="inline" href="index.html">LinkedIn</a>
        //     <a className="inline" href="index.html">Github</a>
        // </nav>

        <div className = "linkSTech">
            {/* <span className = "spanForLinkTech" m-lg-2 p-lg-2">
           
            <a className="linkTagsTech" href="https://docs.google.com/document/d/1Z8ZReoZqfaCpZIE4PSoq2dtW8UE3QVBLaz5XxW_RExU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
           </span>

            <span className = "spanForLinkTech" m-lg-2 p-lg-2">
            
            <a className="linkTagsTech" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
           
            </span>
           
            <span className = "spanForLinkTech" m-lg-2 p-lg-2">

                <a className="linkTagsTech " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a>
                
            </span>

            <span className = "spanForLinkTech" m-lg-2 p-lg-2">

                <a className="linkTagsTech " href="/" >Home</a>
                
            </span> */}
<a className="linkTagsTech " href="/" >Home</a>
<a className="linkTagsTech" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a className="linkTagsTech" href="https://docs.google.com/document/d/1Z8ZReoZqfaCpZIE4PSoq2dtW8UE3QVBLaz5XxW_RExU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>



<a className="linkTagsTech " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a>


        </div>
    )
}

//Exporting Nav component
export default LinksTech;