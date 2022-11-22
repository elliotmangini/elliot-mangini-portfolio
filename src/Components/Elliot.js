import style from '../StyleSheets/Elliot.module.css'
import video from '../Assets/enterbkg.mp4'
import { useState } from 'react';
import Project from './Project';
import { v4 as uuid } from "uuid";


export default function Elliot () {
    const [ selectedProject , setSelectedProject ] = useState("")
    const [ isClicked , setIsClicked ] = useState(false);

    const projectsData = [
        {
            title: "Planetariyum",
            languages: ["React", "Ruby on Rails", "CSS"],
            timeframe: "Three Weeks - Nov. 2022",
            tagline: "Collaborative Engine",
            body: "alskdjfalksjdf. Planetariyum is a social platform for creators featuring a digital asset marketplace wrapped in a mini-game.",
            route: "planetariyum",
        },
        {
            title: "UpQuest!",
            languages: ["CSS", "Ruby", "React", "Sinatra", "SQL"],
            timeframe: "One Week - Oct. 2022",
            tagline: "Track Your Fun",
            body: "UpQuest is a social app for creating city-wide treasure hunts as collections of places to visit and visualizing them as interactive maps.",
            route: "upquest",
        },
        {
            title: "Mountain!",
            languages: ["React", "CSS", "HTML"],
            timeframe: "One Week - Sept. 2022",
            tagline: "Concept To-Do",
            body: "Planetariyum is a social platform for creators featuring a digital asset marketplace wrapped in a mini-game.",
            route: "mountain",
        },
        {
            title: "Foley G-3000!",
            languages: ["Javascript", "CSS", "HTML"],
            timeframe: "One Week - Sept. 2022",
            tagline: "Concept To-Do",
            body: "Foley Generator 3000! is a reactive sound generator that uses speech-to-text synthesis to create ambient atmospheres in real time.",
            route: "foley",
        },
        {
            title: "174!",
            languages: ["Javascript", "CSS", "HTML"],
            timeframe: "Two Weeks - Aug 2022",
            tagline: "Drum n Bass Sequencer",
            body: "174! is a step-sequencer drum machine built on vanilla Javascript.",
            route: "oneseventyfour",
        },
    ]

    const projects = projectsData.map((p) => {
        return (
            <Project setIsClicked={setIsClicked} isClicked={isClicked} selectedProject={selectedProject} setSelectedProject={setSelectedProject} key={uuid()} p={p} />
        )
    })

    return (
        <>
        <div className={style.elliot}>

            {/* KEEP THIS SHIT AT THE TOP */}
            <div id={style.video_container}>
            <div id={style.cover}></div>
            <div id={style.darken}></div>
            <video id="myVideo" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
            </div>

            


            {/* <div id={style.cog}>
                <div className={style.glyphbar}></div>
                <div className={style.glyphbar}></div>
                <div className={style.glyphbar}></div>
            </div> */}


            {/* { !isEntered ? */}
            {/* <li>
                <input type="checkbox" />
                <div className={style.lightup_div} onClick={enter}>E N T E R</div>
            </li> */}
            {/* : null } */}


            {/* { isEntered ? */}
            <div className={style.project_container}>
                {projects}
            </div>
            {/* : null } */}

            <div id={style.overscroll}></div>
            
        </div>
        </>
    )
}