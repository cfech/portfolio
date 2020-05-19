import React from 'react';
import "../styles/tech.css"
import TechCard from "../components/techCard"
import json from "../projects.json"
import Nav from "../components/header"
import LinksTech from "../components/linksTech"
import Footer from "../components/footer"
import TechNav from "../components/techNav"
import TechTop from '../components/techTopPortion'
import TechFooter from "../components/techFooter"

function technologies() {
    return (
        <div className="App tech">
         {/* <TechNav></TechNav>
            <LinksTech /> */}
            <TechTop/>
            <div className="container projects">

                <TechCard href={json[14].href} name={json[14].name} github={json[14].github} technologies={json[14].technologies} description={json[14].description} disclaimer={json[14].disclaimer} />

                <TechCard href={json[12].href} name={json[12].name} github={json[12].github} technologies={json[12].technologies} description={json[12].description} disclaimer={json[12].disclaimer} />

                <TechCard href={json[11].href} name={json[11].name} github={json[11].github} technologies={json[11].technologies} description={json[11].description} disclaimer={json[11].disclaimer} />

                <TechCard href={json[9].href} name={json[9].name} github={json[9].github} technologies={json[9].technologies} description={json[9].description} />

                <TechCard href={json[10].href} name={json[10].name} github={json[10].github} technologies={json[10].technologies} description={json[10].description} />


                <TechCard href={json[13].href} name={json[13].name} github={json[13].github} technologies={json[13].technologies} description={json[13].description} />

                <TechCard href={json[4].href} name={json[4].name} github={json[4].github} technologies={json[4].technologies} description={json[4].description} />

                <TechCard href={json[8].href} name={json[8].name} github={json[8].github} technologies={json[8].technologies} description={json[8].description} />

                <TechCard href={json[5].href} name={json[5].name} github={json[5].github} technologies={json[5].technologies} description={json[5].description} />

                <TechCard href={json[0].href} name={json[0].name} github={json[0].github} technologies={json[0].technologies} description={json[0].description} />

                <TechCard href={json[1].href} name={json[1].name} github={json[1].github} technologies={json[1].technologies} description={json[1].description} />

                <TechCard href={json[6].href} name={json[6].name} github={json[6].github} technologies={json[6].technologies} description={json[6].description} />

                <TechCard href={json[3].href} name={json[3].name} github={json[3].github} technologies={json[3].technologies} description={json[3].description} />

                <TechCard href={json[7].href} name={json[7].name} github={json[7].github} technologies={json[7].technologies} description={json[7].description} />

                <TechCard href={json[2].href} name={json[2].name} github={json[2].github} technologies={json[2].technologies} description={json[2].description} />
            </div>
            <TechFooter/>
            {/* <Footer /> */}
        </div>
    );
}

export default technologies