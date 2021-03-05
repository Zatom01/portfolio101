import React, { useState } from 'react'
import "./Project.css"
import {Link} from "react-router-dom"

function Project() {
    const [projectState, changeState] = useState({
        activeObject: null ,
        objects: [{ id: 1, name: "CLI",image:"images/img-nokogiri.jpeg", project_name: "Webscraping", technology_used: "Ruby, Nokogiri, open-URI, lolize", description:"Scrapes HULU website. Provides user an array of categories from the movie page, lets user to select specific category and the movie inside that category", github:"https://github.com/Zatom01/CLI-Data-Gem-Portfolio-Project",video_demo:"https://youtu.be/oyeCBNCKCMU"},
         { id: 2, name:"Sinatra",image:"images/img-sinatra.jpeg",project_name: "producers-blog",technology_used:"Ruby, bcrypt", description:"Lets user SignUp/SignIn, Create a post, add their list of movies, Update and Delete their Posts ",github:"https://github.com/Zatom01/Sinatra-portfolio-project",video_demo:"https://youtu.be/T0QN3EYgWfU"},
        { id: 3, name:"Rails",image:"images/img-rubyrails.jpg",project_name: "producers-blog",technology_used:"Rails, bcrypt, omniauth",   description:"User can SignUp/SignIn, Create, Read, Update and Delete their Posts, comment on other user's post",github:"https://github.com/Zatom01/Rails-portfolio-project",video_demo:"https://youtu.be/F8exfHLkdSA"},
         { id: 4, name:"Javascript",image:"images/img-js.jpg", project_name: "Destination review",technology_used:"Javascript, Rails",  description:"Single page application with Rails as an API and Javascript as Frontend. User can create a country if doesnot exist, add a review for a specific city, add likes on reviews, Update and Delete a review",github:"https://github.com/Zatom01/destination-review-js-frontend",video_demo:"https://js-frontend-destination-review.netlify.app/"},
          { id: 5, name:"React",image:"images/img-reactredux.jpeg",project_name: "Landlord Management app",technology_used:"React, Redux, Rails",   description:"Helps Management keep track of Landlords and their houses. Rails as an API, React on the frontend. User can Create, Read, Update and Delete a landlord and their houses ",github:"https://github.com/Zatom01/ReactFrontendDeploy-LandlordsApp",video_demo:"https://react-frontend-deploy.netlify.app"},
          { id: 6, name:"Python",image:"", description:"Senior year group project-UHCL 2019. Built Gesture Recognition application in Python utilizing OpenCV that detects Face, No Face & 6 different hand gestures that controls a VLC media player",project_name: "Computer Vision Media Controller",technology_used:"Python, OpenCV, Machine Learning",  github:"https://github.com/Zatom01/ComputerVisionMediaController-SeniorProject2019",video_demo:"https://www.youtube.com/watch?v=RbxZ-CXqGhE"}
        //   { id: 7, name:"Java",image:"", project_name: "Regression",technology_used:"Java",  description:"About Project", github:"needSomeURL",video_demo:"Coming Soon"}
        ]
    });

    function toggleActive(index){
        changeState({...projectState,activeObject: projectState.objects[index]})
    }

    function toggleActiveStyles(index){
        if(projectState.objects[index] === projectState.activeObject){
            return "box active";
        }
        else{
            return "box inactive"
        }
    }

    function videoLink(link){
        return <Link onClick={()=> {window.open(link,"_blank")}}>DEMO<i class="fab fa-youtube"></i></Link>

    }


    return (
        <div classsName= "project__container">
            <img src="images/img-project.jpeg" alt="background"/>
            <div className="box-wrapper">
                {projectState.objects.map((elements,index) => (
                    <>
                        <div key={index} className ={toggleActiveStyles(index)} onClick ={()=> {toggleActive(index)}}>
                            <h2>{elements.name}</h2>
                            {/* <img src={elements.image} alt="" /> */}
                        </div>

                    </>
                )
                )}

            </div>
            <div className="description__container">
                <ul>
                    <li><h3>Project Name:</h3> <h4>{projectState.activeObject === null ? " ": projectState.activeObject.project_name}</h4> </li>
                    <li><h3>Technology Used:</h3> <h4>{projectState.activeObject === null ? " ": projectState.activeObject.technology_used}</h4></li>
                    <li><h3>Project Description:</h3> <h4>{projectState.activeObject === null ? " ": projectState.activeObject.description}</h4></li>
                    <li><h3>Github:</h3> <h4>{projectState.activeObject === null ? " ": projectState.activeObject.github}</h4></li>
                    <li><h3>Video/Demo: </h3> <h4>{projectState.activeObject === null ? " ": videoLink(projectState.activeObject.video_demo)}</h4></li>

                </ul>
            </div>





        </div>
    )
}

export default Project
