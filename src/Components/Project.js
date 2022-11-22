import style from '../StyleSheets/Elliot.module.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from "uuid";


export default function ElliotProject ({ p, isClicked, setIsClicked, selectedProject, setSelectedProject }) {
    const [ go , setGo ] = useState(false);
    const [ isLeaving, setIsLeaving ] = useState(false);

    function animate () {
        setSelectedProject(p.title);
        setIsClicked(true);
    }

    function animateAndNavigate() {
        console.log("click");
        setIsLeaving(true);
        setTimeout(() => {
            setGo(true)
        }, 800);
    }

    function deselect () {
        setGo(false);
        setSelectedProject("");
    }

    const languages = p.languages.map((l) =>{
        return (
            <p key={uuid()} className={style.language_p}>&nbsp;&nbsp; . . . {l}</p>
            
        )
    })

    return (
        <>
            { go ?
                <Navigate to={`/${p.route}`} />
            : null}

            <div className={style.project_text_container}>
            {/* LOAD ALL SAME */}
            {selectedProject === "" ?
            <h1 onClick={() => animate()} className={`${style.project_title_basic} ${style.project_title}`}>{p.title}</h1> : null }

            {/* Project w/ matching title swings slowly, others swing quickly. */}
            { isClicked && !isLeaving ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : `${style.project_title} ${style.delay4} ${style.final_swing}` )}>{p.title}</h1> : null }

            {/* absolute positioned title appears */}
            { isClicked && !isLeaving && p.title === selectedProject ?
            <>
                <div onClick={() => animateAndNavigate()} className={`${style.fade_in}`} id={style.arrowcontainer}>
                    <div id={style.pentagon}></div>
                    <div id={style.triangle}></div>
                </div>
                <div onClick={() => deselect()} id={style.back_arrow_container}>
                    <div id={style.back_arrow_block}></div>
                    <div id={style.back_arrow_triangle}></div>
                </div>

                <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ${style.absolute_title}`}>{p.title}</h1>
            </>
            : null }

            {/* RENDER DETAILS */}
            { isClicked && !isLeaving && p.title === selectedProject ?

            <div className={`${style.project_details}`}>
                <h1 className={`${style.tagline} ${style.slide_in} ${style.off_left}`}>{p.tagline} . . .&nbsp;&nbsp;</h1>
                <div id={`${style.thin_tagline_line}`}></div>
                <p className={`${style.fade_in}`}>{p.body}</p>
                <div id={style.timelang}>
                    <div className={`${style.inline_block_p} ${style.slide_in} ${style.off_right}`}>
                        {languages} :
                    </div>
                    <h2 className={`${style.timeframe} ${style.slide_in} ${style.off_right}`}>: {p.timeframe}</h2>
                </div>
            </div>

            : null }
            
            {/* Project with matching title gets final swing, others become hidden. */}
            { isLeaving ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.hidden}` : `${style.project_title} ${style.final_swing}` )}>{p.title}</h1> : null }

            </div>  
            
            {/* REDIRECT ANIMATION */}
            { isLeaving ?
            <div className={style.expanding_circle}></div> : null }
        </>
    )
}