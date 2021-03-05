import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {

    return (
        <div className="footer">
            <div className ="footer__container">

                <Link className="text-link" onClick={() => {window.open("https://www.linkedin.com/in/neal-gurung-60b15b150/","_blank")}}><i class="fab fa-linkedin fa-2x"></i></Link>
                <Link className="text-link" onClick={() => {window.open("https://github.com/Zatom01","_blank")}}><i class="fab fa-github fa-2x"></i></Link>
                <Link className="text-link" onClick={() => {window.open("https://zatom01.github.io/", "_blank")}}><i class="fas fa-blog fa-2x"></i></Link>

            </div>

        </div>
    )
}

export default Footer
