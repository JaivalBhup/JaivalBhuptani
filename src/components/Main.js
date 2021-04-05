import React from 'react'
import './main.css'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../../src/sketch'

    function Main({img, topLine, headLine, description}){
    return (
        <>
        <P5Wrapper sketch = {sketch}/>
            <div className = "home">
                <div className="container">
                <div className = "home-row"
                style={{display:'flex', flexDirection: 'row'}}>
                    <div className="col">
                    <div className = "img-wrapper">
                            <img src={img} className="profile im" alt = "nn"/>
                        </div>
                        <div className="text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className="heading">{headLine} </h1>
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
                <div className="home-row">
                <a className="div-link" href="#projects"><div className="foot"><img id = "scroll" alt="scroll" src="scroll3.png"/></div></a>
                </div>
            </div>
        </>
    )
}

export default Main
