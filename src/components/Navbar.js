import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    const [click, setClick]= useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const openBlog =() => {
        window.open("https://zatom01.github.io/", "_blank")
    }
    const openResume =() => {
        window.open("https://docs.google.com/document/d/1gqNkd1lzcGV0BBAbKde0F4NNN579jn897dpVBPXyJSQ", "_blank")
    }

    const showButton = () => {

        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
    };

    useEffect(() => {showButton()}, [])

    window.addEventListener('resize',showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                   NEAL&nbsp;<i className="fas fa-fire-alt" />
               </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About&nbsp;<i class="fas fa-user-secret"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" onClick={openBlog}>Blog<i class="fas fa-blog"></i></Link>
                    </li>


                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact&nbsp;<i class="fas fa-envelope-square"></i>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-links" onClick={openResume}>Resume&nbsp;<i class="far fa-file"></i></Link>
                    </li>

                </ul>
            </div>


        </nav>
        </>
    )
}

export default Navbar
