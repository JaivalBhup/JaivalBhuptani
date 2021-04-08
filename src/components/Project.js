import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Project.css'
import './main.css'


    function Main({img,imgStart, topLine, headLine, lightText, description, subtitle, buttonLabel, location, lightBg}){
    return (
        <>
            <div id="projects" className = {lightBg?"proj":"proj darkBg"}>
                <div className="proj-container">
                <div className = "proj-home-row"
                style={{display:'flex', flexDirection: imgStart==="start"? "row-reverse":'row'}}>
                    <div className="proj-col">
                        <div className="proj-text-wrapper">
                            <div className="proj-top-line">{topLine}</div>
                            <h1 className="proj-heading">{headLine}</h1>
                            <p className = {lightText?"proj-title":"proj-title dark-text"}>{description}</p>
                            <p className = {lightText?"proj-subtitle":"proj-subtitle dark-text"}>{subtitle}</p>
                            <a href={location}>
                                <Button buttonStyle="btn-outline" buttonSize="btn-lrg" buttonColor = 'primary'>{buttonLabel}</Button>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className = "proj-img-wrapper">
                            {img.map((i)=>{
                                return <img className="proj-im" alt="prog-im" src={i}/>
                            })}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Main
