import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Elliot from "./Components/Elliot";
import CaseStudy from "./Components/CaseStudy";




export default function App() {
  const [ isInternalRoute , setIsInternalRoute ] = useState(false);
  const projectsData = [
    {
        index: 0,
        chapter: "00 ::",
        title: "Planetariyum",
        languages: ["React", "Ruby on Rails", "CSS"],
        timeframe: "Nov. 2022",
        tagline: "Collaborative Engine",
        body: "Planetariyum is a social platform for creators featuring a digital asset marketplace wrapped in a mini-game. The project was developed independently with a React front end and a Ruby on Rails back end. The database and routing systems were designed and built to support interconnected social and asset collection (game) features. The UI was made directly in CSS and the visual aesthetic is one of the strongest aspects of the project, along with the product design and broad concept which creates solutions for many of the problems with existing platforms.",
        route: "planetariyum",
        videoURL: "https://youtu.be/sJpoPsIlFWU",
    },
    {
        index: 1,
        chapter: "01 ::",
        title: "TraydPost",
        languages: ["Next.js", "Solidity", "CSS"],
        timeframe: "Dec. 2022",
        tagline: "Gallery & Trading dApp",
        body: "TraydPost is an ERC721 minting and managing dApp optimized for digital asset marketplaces and games. It was built to be ported into Planetariyum. Traydpost, like most dApps, relies heavily on management of asynchronous behavior. The CSS was designed from scratch. My role required me to make decisions about the overall direction and concept as well as generating the front end from start to finish and overseeing smart contract development.",
        route: "traydpost",
        videoURL: "https://youtu.be/deV1OB5TLEs",
    },
    {
        index: 2,
        chapter: "02 ::",
        title: "UpQuest!",
        languages: ["CSS", "React", "Sinatra"],
        timeframe: "Oct. 2022",
        tagline: "Track Your Fun",
        body: "UpQuest is a social app for creating city-wide treasure hunts as collections of places to visit and visualizing them as interactive maps. During development I managed our team and developed wireframes, designed and built the back end, and built the front end including the CSS from scratch.",
        route: "upquest",
        videoURL: "https://youtu.be/SkSZFrXAfqA",
    },
    {
        index: 3,
        chapter: "03 ::",
        title: "Foley.G 3K!",
        languages: ["Javascript", "CSS", "HTML"],
        timeframe: "Sept. 2022",
        tagline: "Soundscape Generator",
        body: "This simple web app uses voice recognition and an API offered by Freesound to dynamically generate soundscapes alongside a speaker. Ideal for DnD campaigns, children's storytelling, and musicians. I was responsible for generating the concept and writing the code (JS, CSS, HTML) while working with and helping to teach a partner less experienced in web development who acted as our project manager.",
        route: "foley",
        videoURL: "https://youtu.be/JEl6ldmbEFM",
    },
  ]


  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(!!('ontouchstart' in window));
  }, []);

  // Make our tooltip
  function updateTooltip(mouseEvent) {
    if (!isTouchDevice && mouseEvent.currentTarget) {
      let tooltip = document.querySelector("#tooltip");
      // Move tooltip to our current cursor position
      tooltip.style.top = mouseEvent.pageY+"px"
      tooltip.style.left = mouseEvent.pageX+"px"
      tooltip.innerHTML = mouseEvent.target.getAttribute("tooltip")

      console.log(mouseEvent);
      
      switch(mouseEvent.type) {
        case "mouseenter":
          tooltip.style.visibility = "visible"
          break;
      case "mouseleave":
          tooltip.style.visibility = "hidden"
          break;
      }
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Elliot 
          setIsInternalRoute={setIsInternalRoute} 
          projectsData={projectsData} 
          updateTooltip={updateTooltip}
        />} />
        <Route path="/planetariyum" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[0]} />} />
        <Route path="/traydpost" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[1]} />} />
        <Route path="/upquest" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[2]} />} />
        <Route path="/foley" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[3]} />} />
      </Routes>
    </>
  );
}
