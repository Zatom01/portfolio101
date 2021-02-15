import React, { useState } from 'react'
import "./Project.css"

function Project() {
    const [projectState, changeState] = useState({
        activeObject: null ,
        objects: [{ id: 1, name: "CLI",image:"images/img-nokogiri.jpeg", project_name: "Webscraping", technology_used: "Ruby, Nokogiri, open-URI, lolize", description:"About Project", github:"https://github.com/Zatom01/CLI-Data-Gem-Portfolio-Project",video_demo:"https://youtu.be/oyeCBNCKCMU"},
         { id: 2, name:"Sinatra",image:"images/img-sinatra.jpeg",project_name: "producers-blog",technology_used:"Ruby, bcrypt", description:"About Project",github:"https://github.com/Zatom01/Sinatra-portfolio-project",video_demo:"https://youtu.be/T0QN3EYgWfU"},
        { id: 3, name:"Rails",image:"images/img-rubyrails.jpg",project_name: "producers-blog",technology_used:"Rails, bcrypt, omniauth",   description:"About Project",github:"https://github.com/Zatom01/Rails-portfolio-project",video_demo:"https://youtu.be/F8exfHLkdSA"},
         { id: 4, name:"Javascript",image:"images/img-js.jpg", project_name: "Destination review",technology_used:"Javascript, Rails",  description:"About Project",github:"https://github.com/Zatom01/destination-review-js-frontend",video_demo:"https://js-frontend-destination-review.netlify.app/"},
          { id: 5, name:"React",image:"images/img-reactredux.jpeg",project_name: "Landlord Management app",technology_used:"React, Redux, Rails",   description:"About Project",github:"https://github.com/Zatom01/ReactFrontendDeploy-LandlordsApp",video_demo:"https://react-frontend-deploy.netlify.app"},
          { id: 6, name:"Python",image:"", description:"About Project",project_name: "Computer Vision Media Controller",technology_used:"Python, OpenCV, Machine Learning",  github:"https://github.com/Zatom01/ComputerVisionMediaController-SeniorProject2019",video_demo:"https://www.youtube.com/watch?v=RbxZ-CXqGhE"},
          { id: 7, name:"Java",image:"", project_name: "Regression",technology_used:"Java",  description:"About Project", github:"needSomeURL",video_demo:"Coming Soon"}
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


    return (
        <div classsName= "project__container">
            <h1>This page is still developing!</h1>
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
                        <li><h3>Project Name:</h3> <h4>{projectState.activeObject === null ? "" : projectState.activeObject.project_name}</h4> </li>
                        <li><h3>Technology Used:</h3> <h4>{projectState.activeObject === null ? "" : projectState.activeObject.technology_used}</h4></li>
                        <li><h3>Project Description:</h3> <h4>{projectState.activeObject === null ? "" : projectState.activeObject.description}</h4></li>
                        <li><h3>Github:</h3> <h4>{projectState.activeObject === null ? "" : projectState.activeObject.github}</h4></li>
                        <li><h3>Video/Demo: </h3> <h4>{projectState.activeObject === null ? "" : projectState.activeObject.video_demo}</h4></li>


                    </ul>
            </div>


        </div>
    )
}

export default Project
