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
            body: "Minimalist To Do List with several experimental modes",
            route: "mountain",
        },
        {
            title: "Foley.G 3K!",
            languages: ["Javascript", "CSS", "HTML"],
            timeframe: "One Week - Sept. 2022",
            tagline: "Concept To-Do",
            body: "Minimalist To Do List with several experimental modes",
            route: "foley",
        },
        // {
        //     title: "174!",
        //     languages: ["Javascript", "CSS", "HTML"],
        //     timeframe: "Two Weeks - Aug 2022",
        //     tagline: "Drum n Bass Sequencer",
        //     body: "174! is a step-sequencer drum machine built on vanilla Javascript.",
        //     route: "oneseventyfour",
        // },
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

            {/* { !isEntered ? */}
            {/* <li>
                <input type="checkbox" />
                <div className={style.lightup_div} onClick={enter}>E N T E R</div>
            </li> */}
            {/* : null } */}


            {/* { isEntered ? */}

            <div className={style.reactive_width_container}>
            <h1 className={`${style.project_title_basic} ${style.name_plate} ${style.absolute_title}`}><span>Elliot Mangini</span></h1>
                <div className={`${style.add_drift_up} ${style.position_projects}`}>
                    {projects}
                </div>
            </div>
            {/* : null } */}

            {/* <div id={style.overscroll}></div> */}
            
        </div>
        </>
    )
}