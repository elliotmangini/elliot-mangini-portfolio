import style from '../StyleSheets/Elliot.module.css'
import video from '../Assets/enterbkg.mp4'
import { useEffect, useState } from 'react';
import Project from './Project';
import Resume from './Resume';
import { v4 as uuid } from "uuid";

import OctoCat from '../Assets/octocat_icon_2.png';
import LinkedIn from '../Assets/linkedin_icon.png';
import Blog from '../Assets/blog_icon_1.png';
import ResumeIcon from '../Assets/resume_icon.png';
import Airplane from '../Assets/airplane_icon.png';



export default function Elliot () {
    const [ selectedProject , setSelectedProject ] = useState("")
    const [ isClicked , setIsClicked ] = useState(false);
    const [ isResume , setIsResume ] = useState(false);

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
            title: "TraydPost",
            languages: ["React", "Ruby on Rails", "CSS"],
            timeframe: "Three Weeks - Nov. 2022",
            tagline: "Collaborative Engine",
            body: "alskdjfalksjdf. Planetariyum is a social platform for creators featuring a digital asset marketplace wrapped in a mini-game.",
            route: "planetariyum",
        },
        // {
        //     title: "UpQuest!",
        //     languages: ["CSS", "Ruby", "React", "Sinatra", "SQL"],
        //     timeframe: "One Week - Oct. 2022",
        //     tagline: "Track Your Fun",
        //     body: "UpQuest is a social app for creating city-wide treasure hunts as collections of places to visit and visualizing them as interactive maps.",
        //     route: "upquest",
        // },
        // {
        //     title: "Mountain!",
        //     languages: ["React", "CSS", "HTML"],
        //     timeframe: "One Week - Sept. 2022",
        //     tagline: "Concept To-Do",
        //     body: "Minimalist To Do List with several experimental modes",
        //     route: "mountain",
        // },
        // {
        //     title: "Foley.G 3K!",
        //     languages: ["Javascript", "CSS", "HTML"],
        //     timeframe: "One Week - Sept. 2022",
        //     tagline: "Concept To-Do",
        //     body: "Minimalist To Do List with several experimental modes",
        //     route: "foley",
        // },
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

    function handleResume () {
        setSelectedProject(null);
        setIsResume(!isResume);
    }

    return (
        <>
        <div className={style.elliot}>

            {/* KEEP THIS SHIT AT THE TOP */}
            <div id={style.video_container}>
                <div id={style.cover}></div>
                <div id={style.darken}></div>
                <video id="myVideo" loop autoPlay muted><source src={video} type="video/mp4" /></video>
            </div>

            <div className={style.dynamic_squares_container}>
                <div className={style.dynamic_square}></div>
                <div className={style.dynamic_square}></div>
                <div className={style.dynamic_square}></div>
                <div className={style.dynamic_square}></div>
                <div className={style.dynamic_square}></div>
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
            
            <div onClick={handleResume} className={style.social_icons_container}>
                <a className={style.local_icon_container}>
                    <img src={ResumeIcon} className={style.social_icon} />
                </a>
                <a href="https://github.com/elliotmangini" className={style.social_icon_container}>
                    <img src={OctoCat} className={style.social_icon} />
                </a>
                <a href="https://dev.to/elliotmangini" className={style.social_icon_container}>
                    <img src={Blog} className={style.social_icon} />
                </a>
                <a href="https://www.linkedin.com/in/elliotmangini/" className={style.social_icon_container}>
                    <img src={LinkedIn} className={style.social_icon} />
                </a>
                <a href="https://www.linkedin.com/in/elliotmangini/" className={style.local_icon_container}>
                    <img src={Airplane} className={style.social_icon} />
                </a>
            </div>

            { isResume ?
            <Resume />
            : null}
            
        </div>
        </>
    )
}