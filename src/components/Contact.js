
import React, { Component } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

export class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        errorMsg: "",
        msgSent: ""
    }

    handleSubmit = event => {
        event.preventDefault()

        if((this.state.name != "") && (this.state.email != "") && (this.state.message != "") ){

            emailjs.sendForm('service_ppf2988', 'template_hz29fkt', event.target, 'user_FlE7VMl4w59OFJhjVgj8L')

            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
            this.setState({
                name: "",
                email: "",
                message: "",
                errorMsg: "",
                msgSent: "Message successfully sent!"
            })

        }

        else{

            this.setState({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                errorMsg: "All Fields Must be Filled"
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
                    <form onSubmit={this.handleSubmit} >
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
                            <textarea id="textboxidmsg" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message" ></textarea>
                        </div><br />

                        <br />

                        <input type="submit" value="Send" class="btn btn-primary" />

                    </form>

                    <div>
                        <h3>{this.state.errorMsg}</h3>
                        <h4>{this.state.msgSent}</h4>
                    </div>

                </div>

            </div>
        )
    }
}

export default Contact
