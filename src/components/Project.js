import React, { useState } from 'react'
import "./Project.css"

function Project() {
    const [projectState, changeState] = useState({
        activeObject: null ,
        objects: [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5} ]
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
                <div key={index} className ={toggleActiveStyles(index)} onClick ={()=> {toggleActive(index)}}></div>
            )
            )}

        </div>
    )
}

export default Project
