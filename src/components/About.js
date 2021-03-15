import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="about__container">
            <img src="images/img-home.jpg"/>



            <div class="flex-container">

                <div class="flex-child magenta">
                    Hi, I am Neal from Reno, NV. I love music, data and product engineering.
                </div>

                <div class="flex-child green">
                Full Stack Web Developer with a background in Computer Science. A self-motivated, creative, and organized professional with experience in Ruby on Rails, React + Redux, and JavaScript based programming. My love of coding and seeing the positive impact it has on everyday life began while I was growing up in Nepal. I bring strong collaboration and communication skills that allow me to work effectively with people from a variety of backgrounds.

                </div>

                <div id="x-2">
                    Mentor at WeAllCode.

                    We All Code exists because we believe every kid deserves to excel in one of the emerging fields of STEM, whether they choose to pursue more education or go straight into careers in computer science. Our mission is to inspire, support, and teach these skills to help them be successful.
                </div>

                {/* <div id="x-3">
                    Backend JavaScript Engineer at FighPandemics.
                    <br />
                    FightPandemics is an altruistic platform created in the wake of COVID-19 that connects people and organizations in need of help with those that can provide it. In fostering these vital connections, we empower communities to respond more quickly and effectively to the crisis. Our vision is to create a world where humans are more resilient to emergencies.
                </div> */}

            </div>



        </div>
    )
}

export default About
