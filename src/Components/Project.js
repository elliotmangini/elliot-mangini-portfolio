import style from '../StyleSheets/Elliot.module.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import ink from '../Assets/Pink_ink_water.mp4';


export default function ElliotProject ({ go, setGo, isLeaving, setIsLeaving, p, isClicked, setIsClicked, selectedProject, setSelectedProject }) {

    function animate () {
        setIsClicked(true);
        setSelectedProject(p.title);
    }

    function animateAndNavigate() {
        console.log("click");
        setIsLeaving(true);
        setTimeout(() => {
            setGo(true)
        }, 800);
    }

    function deselect () {
        // setGo(false);
        console.log("click");
        setIsLeaving(false);
        setIsClicked(false);
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

            {/* BIG TITLES */}
            <div>
                <div className={style.big_titles_container}>
                    {/* LOAD ALL SAME */}
                    {selectedProject === "" ?
                    <h1 onClick={() => animate()} className={`${style.project_title_basic} ${style.project_title}`}><span>{p.chapter}</span> {p.title}</h1> : null }

                    {/* Project w/ matching title swings slowly, others swing quickly. */}
                    { isClicked && !isLeaving ?
                    <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : `${style.project_title} ${style.delay4} ${style.final_swing}` )}><span>{p.chapter}</span> {p.title}</h1> : null }
                </div>
            </div>


            {/* RENDER DETAILS */}
            { isClicked && !isLeaving && (p.title === selectedProject) ?
            <div className={style.project_text_container}>
                <div className={`${style.project_details}`}>
                    <h1 className={`${style.tagline} ${style.slide_in} ${style.off_left}`}>{p.tagline} . . .&nbsp;&nbsp;</h1>
                    <div id={`${style.thin_tagline_line}`}></div>
                    <p className={`${style.fade_in_2}`}>{p.body}</p>
                    <br />
                    <h2 className={`${style.timeframe} ${style.slide_in} ${style.off_right}`}>{languages}&nbsp;<span>:</span>&nbsp;<br />: {p.timeframe}</h2>

                    { isClicked && !isLeaving && p.title === selectedProject ?
                    <>
                        {/* <div onClick={() => animateAndNavigate()} className={`${style.fade_in}`} id={style.up_pentagon_container}>
                            <div id={style.pentagon}></div>
                            <div id={style.triangle}></div>
                        </div> */}
                        <div className={`${style.fade_in_6}`} onClick={() => deselect()} id={style.back_arrow_container}>
                            <div id={style.back_arrow_block}></div>
                            <div id={style.back_arrow_triangle}></div>
                        </div>



                        <div className={style.delay_fade}>
                            <div className={style.stay_on_bottom}>
                                <div className={style.video_container}>
                                    <video src={ink} loop autoPlay muted className={style.ink}></video>
                                </div>
                                <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ${style.selected_project} off_right`}>{p.title}</h1>
                            </div>
                        </div>
                    </>
                    : null }
                </div>
                
                {/* Project with matching title gets final swing, others become hidden. */}
                { isLeaving ?
                    <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.hidden}` : `${style.project_title} ${style.final_swing}` )}>{p.title}</h1>
                : null }

            </div>  
            : null }
            
            {/* REDIRECT ANIMATION */}
            { isLeaving ?
            <div className={style.expanding_circle}></div> : null }

            {/* <div className={style.stay_on_bottom}>
            </div> */}
        </>
    )
}