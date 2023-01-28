import style from '../StyleSheets/Resume.module.css'
import { useEffect } from 'react';

import DownloadIcon from '../Assets/download_icon.png';
import ResumePDF from "../Assets/Elliot_Mangini_Resume.pdf";



export default function Resume ({closePopUps, updateTooltip}) {

    useEffect(() => {
        function handleKeyDown(event) {
          if (event.key === 'Escape') {
            closePopUps();
          }
        }
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = 'Elliot_Mangini_Resume.pdf';
        link.href = ResumePDF;
        link.click();
    };


    return (
        <>
            {/* <div className={style.mission_header}>I am . . . </div> */}
            <div className={style.fade_container}>
                <div className={`${style.resume_container} ${style.dev_box}`}>
                    <div className={style.scroll_paper}>
                        <div className={style.download_container}>
                            <img tooltip="Download"  id={style.download_icon} src={DownloadIcon} onClick={onDownload} onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}/>
                        </div>

                        <div className={style.text_margin}>
                            <br />
                            <div className={`${style.mission_box} ${style.dev_box}`}>
                                {/* <span>Mission Statement</span> */}
                                <h1 className={style.mission_statement_title}>Mission Statement</h1>
                                    <p className={style.mission_statement_body}>
                                        A results-oriented <span>full stack developer</span> with experience taking projects from concept to product, and coordinating teams. Highly adaptable and organized <span>leader</span>, active <span>community steward</span>, and <span>multinational collaborator</span>. Excellent troubleshooter who leverages communication and relationship building skills in diverse environments. Recognized for personal commitment to ensuring teammates are supported and empowered.
                                    </p>
                            </div>
                            <br />

                            <div className={`${style.competencies_box} ${style.dev_box}`}>
                                <h2>Core Competencies</h2>
                                <ul className={style.competency_list}>
                                    <li>React</li>
                                    <li>Ruby</li>
                                    <li>Rails</li>
                                    <li>Nest.js</li>
                                    <li>Next.js</li>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>SQL</li>
                                    <li>Solidity</li>
                                    <li>Object-Oriented Programming</li>
                                    <li>TDD</li>
                                    <li>Relational Database Design</li>
                                    <li>Web 3.0</li>
                                </ul>
                            </div>
                            <br />

                            <div className={`${style.experience_box} ${style.dev_box}`}>
                                <h2 className={style.center_text}>Experience</h2>

                                <div>
                                    <div><strong>T.A.</strong></div>
                                    <div className={style.alignright}>08/2022 – 12/2022</div>
                                    <div>Flatiron - Denver, CO</div>
                                </div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Instructed database design, front end, back end, basics of CSS, Javascript, and HTML.</li>
                                    <li className={style.nudgeBottom}>• Led groups in using frameworks, outside technologies, and managing asynchronous patterns.</li>
                                    <li className={style.nudgeBottom}>• Performed code reviews, led pair coding, and aided in debugging when groups were stuck.</li>
                                    <li className={style.nudgeBottom}>• Created blogs, resources, and generated technical writing for students.</li>
                                </ul>
                                <br />
                                
                                <div>
                                    <div><strong>Project Director</strong></div>
                                    <div className={style.alignright}>08/2017 – 08/2021</div>
                                    <div>Palace Media Studios - Tokyo, Japan</div>
                                </div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Collaborated with artist organizations in Japan to shape internal and external communities and communications.</li>
                                    <li className={style.nudgeBottom}>• Led brand projects and produced action plans to help artists implement quality content pipelines and enhance audience growth.</li>
                                    <li className={style.nudgeBottom}>• Published and distributed training resources and coached/mentored individuals to assist development and maximize potential.</li>
                                </ul>
                                <br />

                            </div>
                            <div className={`${style.education_box} ${style.dev_box}`}>
                                <h2 className={style.center_text}>Education</h2>

                                <div>
                                    <div><strong>Full Stack Software Engineering</strong></div>
                                    <div className={style.alignright}>Denver, CO</div>
                                    <div>Certificate, Flatiron School</div>
                                    <div className={style.alignright}>08/2022 – 11/2022</div>
                                    <div>Ruby on Rails, React, Javascript, CSS, HTML</div>
                                </div>
                                <br />
                                <div>
                                    <div><strong>Smart Contract Development & Web 3.0</strong></div>
                                    <div className={style.alignright}>Denver, CO</div>
                                    <div>Certificate, Encode Club</div>
                                    <div className={style.alignright}>10/2022 – 11/2022</div>
                                    <div>Solidity, TypeScript, Angular, NestJS, HardHat, Mocha, Chai, Ethers</div>
                                </div>
                                <br />
                                <div>
                                    <div><strong>Audio Engineering & Music Production</strong></div>
                                    <div className={style.alignright}>Denver, CO</div>
                                    <div>1300 hrs towards B.A. - w/ Ithaca College Professors/Staff</div>
                                    <div className={style.alignright}>08/2017 – 08/2021</div>
                                    <div>Music Production, Composition, Sound Design and Engineering</div>
                                </div>
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}