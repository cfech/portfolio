//Imports
import React from "react";
import "../styles/aboutme.css"

//AboutMe Component
function AboutMe() {
    //Return statement with about me and links section
    return (
        <section className="Search row justify-content-center ">
            <div className="col-lg-12 mt-4 card mb-4 col-12 mr-xs-0" id="aboutMeDiv">
                <div className="card-body">
                    {/* <h1>About Me</h1>
                    <hr className="lineBreak"></hr> */}
                    <img className="picture float-left col-12" src={require('../sameSizePhotos/mypic.jpg')} alt="Graduation" />
                    {/* <p className="aboutMe">Hi!  I'm Connor. I am a recent graduate of Rowan University, William G.
                        Rohrer College of Business, with a Bachelor of Science in Finance. I earned a certification from University of Pennsylvania in their PennLPS Coding
                        Boot Camp.  I focused on MERN stack.  I have learned valuable programming skills to pair with my underlyin
                        . I have had several internships in the area in the
                        past,
                        including working for Intercontinental Exchange (ICE) - TMC Bonds LLC, an alternative trading
                        system, in New York City, and
                        Eagle Rock Wealth Management a financial
                        advisory firm, in New Jersey.</p> */}

                        <p className="aboutMe" >Hi, I'm Connor, a 2019 graduate from Rowan University.  I am a Full Stack Web Developer and Penn LPS Full Stack Bootcamp certified with focus on the MERN Stack.  I have developed several projects both independently and group-based. You can also view each technology used in these projects on my technology page.  I have several years of work experience across many different fields, including multiple professional internships in the finance industry requiring detail-oriented analysis, logistical problem solving and timely completion of tasks.  My passion for learning and applying new skills keeps me focused and ambitious.   </p>

                
                    <div className="row">
                    <h3 id="email" className ="col-lg-4 col-md-6">Email: Cfech44@gmail.com</h3>
                    </div>
                </div>
            </div>

            {/* <div className="card col-lg-4 ml-lg-4 mt-4 col-xs-12 ml-xs-0 mb-4 linksDiv">
                <h1 className="linksH1">Links</h1>
                <hr></hr>

                <div className="row  githubDiv">
                    <form action="https://docs.google.com/document/d/1Z8ZReoZqfaCpZIE4PSoq2dtW8UE3QVBLaz5XxW_RExU/edit?usp=sharing"
                        className="col-12 githubTitle" target="_blank">
                        <input type="submit" id="submitBtn" value="Resume" />
                    </form>
                </div>

                <div className="row  githubDiv">
                    <form action="https://github.com/cfech" className="col-12 githubTitle" target="_blank">
                        <input type="submit" id="submitBtn" value="Github" />
                    </form>
                </div>

                <div className="row  githubDiv">
                    <form action="https://www.linkedin.com/in/connor-fech-99936514a" className="col-12 githubTitle"
                        target="_blank">
                        <input type="submit" id="submitBtn" value="LinkedIn" />
                    </form>
                </div>

                <h1>Contact</h1>
                <hr></hr>
                <div>
                    <p> Email: Cfech44@gmail.com</p>
                </div>

            </div> */}
        </section>
    )
}

//Exporting AboutMe component
export default AboutMe;
