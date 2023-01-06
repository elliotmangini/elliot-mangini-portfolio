import style from '../StyleSheets/Elliot.module.css'
import video from '../Assets/enterbkg.mp4'
import { useEffect, useState } from 'react';
import Project from './Project';
import Resume from './Resume';
import Cube from './Cube';
import EmailPopup from './EmailPopup';
import { v4 as uuid } from "uuid";

import OctoCat from '../Assets/octocat_icon_2.png';
import LinkedIn from '../Assets/linkedin_icon.png';
import Blog from '../Assets/blog_icon_1.png';
import ResumeIcon from '../Assets/resume_icon.png';
import Airplane from '../Assets/airplane_icon.png';



export default function Elliot () {
    const [ selectedProject , setSelectedProject ] = useState("")
    const [ isClicked , setIsClicked ] = useState(false);
    const [ go , setGo ] = useState(false);
    const [ isLeaving, setIsLeaving ] = useState(false);
    const [ popUp , setPopUp ] = useState("");

    const projectsData = [
        {
            chapter: "00 ::",
            title: "Planetariyum",
            languages: ["React", "Ruby on Rails", "CSS"],
            timeframe: "Three Weeks - Nov. 2022",
            tagline: "Collaborative Engine",
            body: "Planetariyum is a social platform for creators featuring a digital asset marketplace wrapped in a mini-game.",
            route: "planetariyum",
        },
        {
            chapter: "01 ::",
            title: "TraydPost",
            languages: ["Next.js", "Solidity", "CSS"],
            timeframe: "One Week - Dec. 2022",
            tagline: "NFT Gallery & Trading dApp",
            body: "Created as a capstone project for Encode Club's Solidity Bootcamp, TraydPost is an ERC721 minting and managing dApp which is optimized for digital asset marketplaces and games. It was built to be ported into Planetariyum.",
            route: "traydpost",
        },
        {
            chapter: "02 ::",
            title: "UpQuest!",
            languages: ["CSS", "Ruby", "React", "Sinatra", "SQL"],
            timeframe: "One Week - Oct. 2022",
            tagline: "Track Your Fun",
            body: "UpQuest is a social app for creating city-wide treasure hunts as collections of places to visit and visualizing them as interactive maps.",
            route: "upquest",
        },
        // {
        //     chapter: "03 ::",
        //     title: "Mountain!",
        //     languages: ["React", "CSS", "HTML"],
        //     timeframe: "One Week - Sept. 2022",
        //     tagline: "Concept To-Do",
        //     body: "Minimalist To Do List with experimental modes",
        //     route: "mountain",
        // },
        {
            chapter: "03 ::",
            title: "Foley.G 3K!",
            languages: ["Javascript", "CSS", "HTML"],
            timeframe: "One Week - Sept. 2022",
            tagline: "Real-Time API Powered Audio Engine",
            body: "Minimalist To Do List with experimental modes. Created as a Phase 2 project for Software Engineering bootcamp.",
            route: "foley",
        },
    ]

    const projects = projectsData.map((p) => {
        return (
            <Project isLeaving={isLeaving} setIsLeaving={setIsLeaving} go={go} setGo={setGo} setIsClicked={setIsClicked} isClicked={isClicked} selectedProject={selectedProject} setSelectedProject={setSelectedProject} key={uuid()} p={p} />
        )
    })

    function handlePopups (desired) {
        if (popUp === desired) {
            showList();
        } else {
            hideList();
            setPopUp(desired);
        }
    }

    function showList () {
        setPopUp("");
        setSelectedProject("");
        setIsLeaving(false);
        setIsClicked(false);
        setSelectedProject("");
    }

    function hideList () {
        setSelectedProject(null);
    }

    return (
        <>
        <div className={style.elliot}>

            {/* KEEP THIS SHIT AT THE TOP */}
            <div id={style.video_container}>
                <div id={style.cover}></div>
                <div className={`${style.darken} ${selectedProject ? style.darkenest : null}`}></div>
                <video id="myVideo" loop autoPlay muted><source src={video} type="video/mp4" /></video>
            </div>

            <div className={`${style.fade_overlay} ${popUp ? style.focus_cube : null}`}>
                <Cube selectedProject={selectedProject} />
            </div>

            <div className={style.reactive_width_container}>
            <h1 className={`${style.project_title_basic} ${style.name_plate} ${style.absolute_title}`}>Elliot Mangini<span>Software Engineer ::</span></h1>
                <div className={`${style.add_drift_up} ${style.position_projects}`}>
                    {projects}
                </div>
            </div>


            
            <div className={style.social_icons_container}>
                <a onClick={() => handlePopups("resume")} className={style.local_icon_container}>
                    <img src={ResumeIcon} className={style.social_icon} />
                </a>
                <a href="https://www.linkedin.com/in/elliotmangini/" className={style.social_icon_container}>
                    <img src={LinkedIn} className={style.social_icon} />
                </a>
                <a href="https://github.com/elliotmangini" className={style.social_icon_container}>
                    <img src={OctoCat} className={style.social_icon} />
                </a>
                <a href="https://dev.to/elliotmangini" className={style.social_icon_container}>
                    <img src={Blog} className={style.social_icon} />
                </a>
                <a className={style.local_icon_container}>
                    <img  onClick={() => handlePopups("email")} src={Airplane} className={style.social_icon} />
                </a>
            </div>

            { popUp === "resume" ?
            <Resume />
            : null}

            { popUp === "email" ?
            <EmailPopup showList={showList} />
            : null}
            
        </div>
        </>
    )
}