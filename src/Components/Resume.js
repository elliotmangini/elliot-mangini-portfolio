import style from '../StyleSheets/Resume.module.css'



export default function Resume () {

    return (
        <>
            {/* <div className={style.mission_header}>I am . . . </div> */}
            <div className={style.fade_container}>
                <div className={`${style.resume_container} ${style.dev_box}`}>
                    <div className={style.scroll_paper}>

                        <div className={style.text_margin}>
                            {/* <div className={`${style.header_box} ${style.dev_box}`}>
                                <div className={style.name}>Elliot Mangini</div>
                                Earth, Milky Way • (999) 999-9999 • elliot.mangini@gmail.com
                            </div> */}
                            <br />
                            <div className={`${style.mission_box} ${style.dev_box}`}>
                                {/* <span>Mission Statement</span> */}
                                <div className={style.name}>Mission Statement</div>
                                <br />
                                A results-oriented full stack developer with experience taking projects from concept to product, coordinating teams, and in practical algorithmic problem solving. Highly adaptable and organized contributor, community steward, and multinational collaborator. Excellent troubleshooter who leverages communication and relationship building skills in diverse environments. Recognized for personal commitment to ensuring teammates are supported and empowered.
                            </div>
                            <br />
                            <br />
                            <div className={`${style.competencies_box} ${style.dev_box}`}>
                                <div className={style.center_text}><span>Core Competencies</span></div>
                                <br />
                                Solidity | React | Ruby | Rails | NestJS | NextJS | Angular | JavaScript | CSS | HTML | SQL
                                <br />
                                Object-Oriented Programming | TDD | Relational Database Design | Web 3.0
                            </div>
                            <br />
                            <br />


                            <div className={`${style.projects_box} ${style.dev_box}`}>
                                <div className={style.center_text}><span>Technical Projects</span></div>

                                <div><strong>Planetariyum</strong></div>
                                <div>Full Stack Developer - Collaborative engine, social platform for creators featuring a digital asset marketplace wrapped in a mini-game.</div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Generated core concept and devised systems to support and deliver a multi-objective full stack application in under three weeks.</li>
                                    <li className={style.nudgeBottom}>• Designed UX and styled UI to create a world class, visually stunning, and original aesthetic.</li>
                                    <li className={style.nudgeBottom}>• Configured environments for development, testing, and production to deploy smoothly and on time.</li>
                                    <li className={style.nudgeBottom}>• Presented for members of the public and authored case studies to showcase the development cycle and final product.</li>
                                    <li className={style.nudgeBottom}>• Enhanced feature set by porting and integrating an existing project from JS, CSS, and HTML to React with Ruby on Rails.</li>
                                </ul>
                                <br />

                                <div><strong>TraydPost</strong></div>
                                <div>Group Leader & Front End Engineer - ERC721 management DApp.</div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Generated wireframes, planned tasks and meetings, and performed Git merges leading to smooth operations within a new team.</li>
                                    <li className={style.nudgeBottom}>• Oversaw Smart Contract development and designed front end, planned contract features enhancing meta attribute functionality.</li>
                                    <li className={style.nudgeBottom}>• Created video and promotional materials to give our team an edge and maintain a positive atmosphere.</li>
                                </ul>
                                <br />

                                <div><strong>UpQuest!</strong></div>
                                <div>Group Leader & Back End Engineer - Social app for creating treasure hunts as collections of sites visualized through interactive maps.</div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Built and maintained database using Ruby and Sinatra to meet all deliverables and oversaw management of GitHub repositories.</li>
                                    <li className={style.nudgeBottom}>• Advised in strategy, formed wireframes that determined project success, and worked overtime to reach stretch goals.</li>
                                    <li className={style.nudgeBottom}>• Provided technical support among self-organizing cross-functional teams and supervised test driven development.</li>
                                </ul>
                                <br />

                                <div><strong>Foley Generator 3000!</strong></div>
                                <div>Frontend Engineer & Team Lead - Reactive sound generator using speech-to-text synthesis to create ambient atmospheres in real time.</div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Developed central idea and designed codebase. Identified limitations of stack and derived novel solutions.</li>
                                    <li className={style.nudgeBottom}>• Demonstrated and instructed in functionality of code to ensure team members’ comprehension of technologies utilized.</li>
                                </ul>
                                <br />

                                <div><strong>174!</strong></div>
                                <div>Solo Development - Step-sequencer drum machine built primarily on vanilla Javascript.</div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Conceptualized, planned, and delivered with limited stack (JavaScript, CSS, HTML)</li>
                                    <li className={style.nudgeBottom}>• Demonstrated and instructed in functionality of code to ensure team members’ comprehension of technologies utilized.</li>
                                </ul>
                                <br />
                            </div>

                            <div className={`${style.experience_box} ${style.dev_box}`}>
                                <div className={style.center_text}><span>Work Experience</span></div>
                                
                                <div>
                                    <div><strong>Project Director</strong></div>
                                    <div className={style.alignright}>08/2017 – 08/2021</div>
                                    <div>Palace Media Studios, Tokyo, Japan</div>
                                </div>
                                <ul>
                                    <li className={style.nudgeBottom}>• Collaborated with artist organizations in Japan to shape internal and external communities and communications.</li>
                                    <li className={style.nudgeBottom}>• Led brand projects and produced action plans to help artists implement quality content pipelines and enhance audience growth.</li>
                                    <li className={style.nudgeBottom}>• Published and distributed training resources and coached/mentored individuals to assist development and maximize potential.</li>
                                </ul>
                                <br />

                            </div>
                            <div className={`${style.education_box} ${style.dev_box}`}>
                                <div className={style.center_text}><span>Education</span></div>

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