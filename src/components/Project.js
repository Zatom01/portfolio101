import React, { useState } from 'react'
import "./Project.css"

function Project() {
    const [projectState, changeState] = useState({
        activeObject: null ,
        objects: [{ id: 1, name: "CLI",image:"images/img-nokogiri.jpeg", description:"About Project", github:"https://github.com/Zatom01/CLI-Data-Gem-Portfolio-Project"},
         { id: 2, name:"Sinatra",image:"images/img-sinatra.jpeg", description:"About Project",github:"https://github.com/Zatom01/Sinatra-portfolio-project"},
        { id: 3, name:"Rails",image:"images/img-rubyrails.jpg", description:"About Project",github:"https://github.com/Zatom01/Rails-portfolio-project"},
         { id: 4, name:"Javascript",image:"images/img-js.jpg", description:"About Project",github:"https://github.com/Zatom01/destination-review-js-frontend"},
          { id: 5, name:"React",image:"images/img-reactredux.jpeg", description:"About Project",github:"https://github.com/Zatom01/ReactFrontendDeploy-LandlordsApp"},
          { id: 6, name:"Python",image:"", description:"About Project",github:"https://github.com/Zatom01/ComputerVisionMediaController-SeniorProject2019"},
          { id: 7, name:"Java",image:"", description:"About Project"}
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


        </div>
    )
}

export default Project
