import React from 'react'
import '../App.css'
import {Button} from "./Button"
import './HeroSection.css'

function HeroSection() {

    return (
        <div className="hero-container">
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <h1>NICE TO MEET YOU ! </h1>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" >About</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" >Projects<i className='far far-play-circle' /></Button>
            </div>


        </div>
    )
}

export default HeroSection
