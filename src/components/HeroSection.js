import React from 'react'
import '../App.css'
// import {Button} from "./Button"
import './HeroSection.css'
import {Link} from 'react-router-dom'

function HeroSection() {

    // aboutRoute = () => {
    //     this.history.push('/about');
    // }

    return (
        <div className="hero-container">
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <h1>NICE TO MEET YOU !</h1>
            <div className="hero-btns">
                {/* <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" onClick= {this.aboutRoute}>About</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick= {event =>  window.location.href='/resume'}>Projects<i className='far far-play-circle' /></Button> */}
                <Link className="link-font" to="/about" ><h1>About</h1></Link>

                <br></br>
                <Link className="link-font" to="/project" ><h1>Projects</h1></Link>
            </div>

            {/* <div class="flex-container">

                <div class="flex-child magenta">
                    Location : Lake Tahoe, California
                </div>

                <div class="flex-child green">
                Beautiful sunset view

                </div>

            </div> */}




        </div>
    )
}

export default HeroSection
