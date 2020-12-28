// import React from 'react'
// import '../App.css'
// import HeroSection from './HeroSection'

// function Home() {
//     return (
//         <>
//             <HeroSection />
//         </>
//     )
// }

// export default Home;

import React from 'react'
import '../App.css'
import HeroSection from './HeroSection'

export const Home = () => {
    document.getElementsByTagName("video")[0].playbackRate = 0.5
    return (
        <>
            <HeroSection />

        </>
    )
}
