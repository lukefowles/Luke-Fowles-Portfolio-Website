import React from 'react'
import './body.css'
import Projects from './projects'
import Skills from './skills'
import AboutMe from './aboutMe'

function Body() {
    return (
        <div className="body">
            <section id = 'aboutMe'>
                <AboutMe>
                </AboutMe>
            </section> 
            <section id= 'projects'>
                <Projects>
                </Projects>
            </section> 
            <section id = 'skills'>
                <Skills>
                </Skills>
            </section>  
        </div>
    )
}

export default Body
