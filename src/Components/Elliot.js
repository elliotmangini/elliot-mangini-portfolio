import style from '../StyleSheets/Elliot.module.css'
import video from '../Assets/enterbkg.mp4'
import { useEffect, useState } from 'react';
import Project from './Project';
import Resume from './Resume';
import SocialLinks from './SocialLinks';
import Cube from './Cube';
import EmailPopup from './EmailPopup';
import { v4 as uuid } from "uuid";
import Curtains from './Curtains';



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
            body: "Using voice recognition and the Freesound API to dynamically generate soundscapes alongside a speaker. Ideal for DnD campaigns, children's storytelling, and musicians.",
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
                {/* background video */}
                <div id={style.video_container}>
                    <div id={style.cover}></div>
                    <div className={`${style.darken} ${selectedProject ? style.darkenest : null}`}></div>
                    <video id="myVideo" loop autoPlay muted><source src={video} type="video/mp4" /></video>
                </div>


                {/* rotating cube of gifs */}
                <div className={`${style.fade_overlay} ${popUp ? style.focus_cube : null}`}>
                    <Cube selectedProject={selectedProject} />
                </div>

                {/* main contained stuff */}
                <div className={style.reactive_width_container}>

                    {/* site title */}
                    <h1 className={`${style.project_title_basic} ${style.name_plate} ${style.absolute_title} ${isLeaving ? style.main_title_away : null }`}>Elliot Mangini<span>Software Engineer ::</span></h1>

                    {/* projects */}
                    <div className={`${style.add_drift_up} ${style.position_projects}`}>
                        {projects}
                    </div>
                </div>

                { isLeaving ? <Curtains animation={"coming"} /> : null }

                    
                {/* links */}
                <SocialLinks isLeaving={isLeaving} handlePopups={handlePopups} isLeaving={isLeaving} />


                {/* popups! */}
                { popUp === "resume" ?
                <Resume />
                : null}

                { popUp === "email" ?
                <EmailPopup showList={showList} />
                : null}
                
            </div>

        </>
    );
};