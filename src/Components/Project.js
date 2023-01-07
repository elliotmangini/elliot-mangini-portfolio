import style from '../StyleSheets/Elliot.module.css';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import ink from '../Assets/Pink_ink_water.mp4';
import arrow from '../Assets/arrow-gif.gif';
import Curtains from './Curtains';


export default function ElliotProject ({ go, setGo, isLeaving, setIsLeaving, p, isClicked, setIsClicked, selectedProject, setSelectedProject }) {

    function animate () {
        setIsClicked(true);
        setSelectedProject(p.title);
    }

    function animateAndNavigate() {
        setIsLeaving(true);
        setTimeout(() => {
            setGo(p.route)
        }, 6000);
    }



    // "back" button function
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

    console.log(p.route);

    return (
        <>
            { go === p.route ?
                <Navigate to={`/${p.route}`} />
            : null}

            {/* List of Projects */}
            <div>
                <div className={style.big_titles_container}>
                    {/* LOAD ALL SAME */}
                    {selectedProject === "" ?
                    <h1 onClick={() => animate()} className={`${style.project_title_basic} ${style.project_title}`}><span>{p.chapter}</span> {p.title}</h1> : null }

                    {/* Project w/ matching title swings slowly, others swing quickly. */}
                    { isClicked && !isLeaving ?
                    <h1 className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : `${style.project_title} ${style.delay4} ${style.final_swing}` )}><span>{p.chapter}</span> {p.title}</h1> : null }
                </div>
            </div>


            {/* Project Details */}
            { isClicked && (p.title === selectedProject) ?
            <>
            { !isLeaving ?
            // show the project's quick breakdown
            <div className={style.project_text_container}>
                <div className={`${style.project_details}`}>
                    <h1 className={`${style.tagline} ${style.slide_in} ${style.off_left}`}>{p.tagline} . . .&nbsp;&nbsp;</h1>
                    <div id={`${style.thin_tagline_line}`}></div>
                    <p className={`${style.fade_in_2}`}>{p.body}</p>
                    <br />
                    <h2 className={`${style.timeframe} ${style.slide_in} ${style.off_right}`}>{languages}&nbsp;<span>:</span>&nbsp;<br />: {p.timeframe}</h2>
                    <>
                    {/* Large mask Title */}
                        <div className={style.delay_fade}>
                            <div className={style.stay_on_bottom}>
                                <div className={style.video_container}>
                                    <video src={ink} loop autoPlay muted className={style.ink}></video>
                                </div>
                                <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ${style.selected_project}`}>{p.title}</h1>

                                <div className={`${style.arrows_container} ${style.long_delay_fade}`}>
                                    <img className={style.arrow_one} src={arrow}></img>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>  
            :
            // isLeaving is true, case study is entered, quick-look dissapears
            <>
            <div className={`${style.project_text_container} ${style.fade_out_4}`}>
                <div className={`${style.project_details}`}>
                    <h1 className={`${style.tagline}`}>{p.tagline} . . .&nbsp;&nbsp;</h1>
                    <div id={`${style.thin_tagline_stabilized}`}></div>
                    <p className={``}>{p.body}</p>
                    <br />
                    <h2 className={`${style.timeframe}`}>{languages}&nbsp;<span>:</span>&nbsp;<br />: {p.timeframe}</h2>
                    <>
                    {/* Large mask Title */}
                        <div className={``}>
                            <div className={style.stay_on_bottom}>
                                <div className={style.video_container}>
                                    <video src={ink} loop autoPlay muted className={style.ink}></video>
                                </div>
                                <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ${style.selected_project}`}>{p.title}</h1>

                                <div className={`${style.arrows_container} ${style.long_delay_fade}`}>
                                    <img className={style.arrow_one} src={arrow}></img>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
            </>
            }
            </>


            : null }
            
        </>
    )
}