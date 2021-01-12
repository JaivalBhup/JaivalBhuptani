import React from 'react'
import Main from '../../Main'
import Footer from '../../Footer'
import Project from "../../Project";
import {homeObj} from './Data'
import {Projects} from './Projects'
function Home() {
    return (
        <>
            <Main {...homeObj}></Main>
            {Projects.map((project)=>{
                return <Project {...project}></Project>
            })}
            <Footer/>
        </>
    )
}

export default Home
