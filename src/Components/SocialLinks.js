import style from '../StyleSheets/Elliot.module.css'
import OctoCat from '../Assets/octocat_icon_2.png';
import LinkedIn from '../Assets/linkedin_icon.png';
import Blog from '../Assets/blog_icon_1.png';
import ResumeIcon from '../Assets/resume_icon.png';
import Airplane from '../Assets/airplane_icon.png';




export default function SocialLinks ({updateTooltip, effect, isLeaving , handlePopups}) {
    

    return (
        <div className={`${style.social_icons_container} ${isLeaving || effect === "blurred" ? style.monochrome : null} ${effect === "longest sneakin" ? style.creep : null}`}>
            {<a onClick={() => handlePopups("resume")} className={style.local_icon_container}
             onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img alt="Resume Icon" tooltip="Resume"  src={ResumeIcon} className={style.social_icon} />
            </a>}
            <a href="https://www.linkedin.com/in/elliotmangini/" 
                target="_blank"
                className={style.social_icon_container}
                onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
             >
                <img alt="LinkedIn Icon" tooltip="LinkedIn" src={LinkedIn} className={style.social_icon} />
            </a>
            <a href="https://github.com/elliotmangini" 
                target="_blank"
                className={style.social_icon_container}
                onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img alt="OctoCat Icon" tooltip="GitHub" src={OctoCat} className={style.social_icon} />
            </a>
            <a href="https://dev.to/elliotmangini" 
                target="_blank"
                className={style.social_icon_container}
                onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img alt="DEV Blog Icon" tooltip="Blog" src={Blog} className={style.social_icon} />
            </a>
            <a className={style.local_icon_container}
                onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img alt="Contact Icon" tooltip="Contact" onClick={() => handlePopups("email")} src={Airplane} className={style.social_icon} />
            </a>
        </div>
    )
}