import React, { useState } from 'react'
import "./Project.css"

function Project() {
    const [projectState, changeState] = useState({
        activeObject: null ,
        objects: [{ id: 1, name: "CLI"}, { id: 2, name:"Sinatra"}, { id: 3, name:"Rails"}, { id: 4, name:"Javascript"}, { id: 5, name:"React" }]
    });

    function toggleActive(index){
        changeState({...projectState, activeObject: projectState.objects[index]});
    }

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
            <img src="images/img-project.jpeg"/>
            {projectState.objects.map((elements,index) => (
                <div key={index} className ={toggleActiveStyles(index)} onClick ={()=> {toggleActive(index)}}>
                    <h2>{elements.name}</h2>
                </div>
            )
            )}

        </div>
    )
}

export default Project
