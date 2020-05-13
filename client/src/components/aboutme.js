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
                    <img className="picture float-left mr-2 col-12" src={require('../sameSizePhotos/mypic.jpg')} alt="Graduation" />
                    <p className="aboutMe">My name is Connor Fech. I am 23 years old and a recent graduate of Rowan University, William G.
                        Rohrer College of Business, with a Bachelor of Science in Finance. I took the PennLPS Coding
                        Boot Camp in order to learn valuable programming skills to pair with my
                        continually advancing financial knowledge. I have had several internships in the area in the
                        past,
                        including working for Intercontinental Exchange (ICE) - TMC Bonds LLC, an alternative trading
                        system, in New York City, and
                        Eagle Rock Wealth Management a financial
                        advisory firm, in New Jersey.</p>

                    <p className="aboutMe">I am a huge sports fan. My favorite sport is college basketball, although the refs have been
                        making it
                        tougher and tougher lately. My favorite team is the Kentucky Wildcats and I am a fan of
                        Rutgers, as well. I also like to follow the NBA and NFL too, however, no specific team. I also
                        play fantasy
                        football and am the Commissioner of one my leagues. In my free time, I like
                        to go to the gym, lift weights and play basketball. I also like to follow the financial markets,
                        watch sports,and play video
                        games (either Xbox or PS4).
                    </p>

                    <h3>Email: Cfech44@gmail.com</h3>
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
