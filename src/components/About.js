import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about__container">
            <img src="images/img-home.jpg"/>
            <h1>This is about page</h1>

            <div class="flex-container">

                <div class="flex-child magenta">
                    Flex Column 1
                </div>

                <div class="flex-child green">
                    Flex Column 2
                </div>

            </div>


        </div>
    )
}

export default About
