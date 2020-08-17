//Imports
import React, { useState, useEffect } from "react";
import"./techCard.css"


//Homework Component
function TechCard(props) {

    const [technologies, setTechnologies] = useState(props.technologies)


    return (

        <div className="col-lg-12 col-md-12 techCardB">
            <div className="text-center head">
                <p className="repoLinkTech">  <a className="repoLinkTech" href={props.href}
                    target="_blank" without rel="noopener noreferrer">{props.name}
                </a>
                    ||
                    <a className="repoLinkTech" href={props.github}
                        target="_blank" without rel="noopener noreferrer">Github Repo
                    </a>
                </p>
            </div>
            <div className="row">
                <div className="descriptionDiv col-lg-6 col-md-12">
                    {/* <h6 className="und descH6">Description</h6> */}
                    <br></br>
                    <p className="descriptionP">
                        {props.description}
                    </p>
                    <p className="disclaimer">{props.disclaimer}</p>
                </div>

                <div className="techDiv col-lg-6 col-md-12">
                    {/* <h6 className="und techH6">Technologies</h6> */}
                    <br></br>
                    <ul className="techList">
                        {
                            technologies.map((item) => (
                                <li> {item}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </div>
    )
}

//Exporting Homework Component
export default TechCard



