
import React, { Component } from 'react'
import './Contact.css'
import * as emailjs from 'emailjs-com';

export class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        if(this.state.name !== " " && this.state.email !== " " && this.state.message !== " "){
            const {name, email, message} = this.state;
            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: "anilgurung641",
                message_html: message,
            }

            emailjs.sendForm(
                'gmail',
                'template_hz29fkt',
                 templateParams,
                'user_FlE7VMl4w59OFJhjVgj8L'
               )

            this.setState({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className ="contact__container">
                <img src='images/img-9.jpg'/>
                <h1>Nice to meet you ! Lets Connect </h1>
                <div align="center">
                    <form onSubmit={this.handleSubmit.bind(this) } >
                        <div>
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="textboxid" class="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        </div> <br />


                        <div>
                            <label htmlFor="email"> </label>
                            <input type="text" name="email" id="textboxid" class="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        </div><br />

                        <div>
                            <label htmlFor="message"></label>
                            {/* <input type="textarea" name="message" id="textboxidmsg" class="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} /> */}
                            <textarea id="textboxidmsg" value={this.state.message} onChange={this.handleChange} placeholder="Message" ></textarea>
                        </div><br />

                        <br />

                        <input type="submit" value="Send" class="btn btn-primary" />

                    </form>

                </div>

            </div>
        )
    }
}

export default Contact
