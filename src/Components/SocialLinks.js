import style from '../StyleSheets/Elliot.module.css'
import OctoCat from '../Assets/octocat_icon_2.png';
import LinkedIn from '../Assets/linkedin_icon.png';
import Blog from '../Assets/blog_icon_1.png';
import ResumeIcon from '../Assets/resume_icon.png';
import Airplane from '../Assets/airplane_icon.png';




export default function SocialLinks ({effect, isLeaving , handlePopups}) {

    // Make our tooltip
    function updateTooltip(mouseEvent) {
        let tooltip = document.querySelector("#tooltip");
        // Move tooltip to our current cursor position
        tooltip.style.top = mouseEvent.pageY+"px"
        tooltip.style.left = mouseEvent.pageX+"px"
        
        switch(mouseEvent.type) {
            case "mouseenter":
            // update text and show tooltip when we hover
            console.log(mouseEvent.target);
            console.log(mouseEvent.target.getAttribute("tooltip"));
            tooltip.innerHTML = mouseEvent.target.getAttribute("tooltip")
            tooltip.style.visibility = "visible"
            break;
        case "mouseleave":
            // hide the tooltip when we are no longer above a tooltip element
            tooltip.style.visibility = "hidden"
            break;
        }
    }
    

    return (
        <div className={`${style.social_icons_container} ${isLeaving || effect === "blurred" ? style.monochrome : null} ${effect === "longest sneakin" ? style.creep : null}`}>
            {<a onClick={() => handlePopups("resume")} className={style.local_icon_container}
             onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img tooltip="Resume"  src={ResumeIcon} className={style.social_icon} />
            </a>}
            <a href="https://www.linkedin.com/in/elliotmangini/" className={style.social_icon_container}
             onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
             >
                <img tooltip="LinkedIn" src={LinkedIn} className={style.social_icon} />
            </a>
            <a href="https://github.com/elliotmangini" className={style.social_icon_container}
             onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img tooltip="GitHub" src={OctoCat} className={style.social_icon} />
            </a>
            <a href="https://dev.to/elliotmangini" className={style.social_icon_container}
             onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img tooltip="Blog" src={Blog} className={style.social_icon} />
            </a>
            <a className={style.local_icon_container}
             onMouseEnter={updateTooltip} onMouseLeave={updateTooltip} onMouseMove={updateTooltip}
            >
                <img tooltip="Contact Form" onClick={() => handlePopups("email")} src={Airplane} className={style.social_icon} />
            </a>
        </div>
    )
}