import style from '../StyleSheets/Elliot.module.css'
import OctoCat from '../Assets/octocat_icon_2.png';
import LinkedIn from '../Assets/linkedin_icon.png';
import Blog from '../Assets/blog_icon_1.png';
import ResumeIcon from '../Assets/resume_icon.png';
import Airplane from '../Assets/airplane_icon.png';




export default function SocialLinks ({effect, isLeaving , handlePopups}) {
    

    return (
        <div className={`${style.social_icons_container} ${isLeaving || effect === "blurred" ? style.monochrome : null}`}>
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
    )
}