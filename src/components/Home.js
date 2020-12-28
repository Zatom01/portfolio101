
import React, { Component } from 'react'
import '../App.css'
import HeroSection from './HeroSection'


export class Home extends Component {

    componentDidMount = () => {
        document.getElementsByTagName("video")[0].playbackRate = 0.5
    }

    render() {
        return (
            <>
                <HeroSection />

            </>
        )
    }
}

export default Home
