import React from 'react'
import './main.css'


    function Main({img, topLine, headLine, description}){
    return (
        <>
            <div className = "home darkBg">
                <div className="container">
                <div className = "home-row"
                style={{display:'flex', flexDirection: 'row'}}>
                    <div className="col">
                    <div className = "img-wrapper">
                            <img src={img} className="profile im" alt = "nn"/>
                        </div>
                        <div className="text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className="heading">{headLine} <img src="animation.gif" className="rotate im" alt = "nn"/></h1>
                            <p className = "title">{description}</p>
                            {/* <Link to = "/">
                                <Button buttonStyle="btn-outline" buttonSize="btn-lrg" buttonColor = 'primary'></Button>
                            </Link> */}
                            <a href="https://github.com/JaivalBhup"> 
                                <i class="fab fa-github fa-2x"></i>                            
                            </a>
                            <a href="https://www.linkedin.com/in/Jaivalbhup/"> 
                                <i class="fab fa-linkedin fa-2x"></i>                            
                            </a>
                            <a href="mailto:jaivalbhuptani1406@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className = "logo-wrapper">
                            <div className="img-row">
                                <div className="img-col">
                                    <img className = "logo im" alt="ani" src = "swift.svg"></img>
                                    <img className = "logo im" alt="ani" src = "structure.svg"></img>
                                </div>
                                <div className="img-col">
                                    <img className = "logo im" alt="ani" src = "java.svg"></img>
                                    <img className = "logo im" alt="ani" src = "python.svg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="home-row">
                <p className="pfoot">Here are some of my projects <i className="down-arr fas fa-hand-point-down fa-2x"></i></p>
                </div> */}
            </div>
            
        </>
    )
}

export default Main
