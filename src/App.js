import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Elliot from "./Components/Elliot";
import CaseStudy from "./Components/CaseStudy";

import PlanetariyumVideo from './Assets/LargeFiles/PlanetariyumStudy.mp4';
import FoleyVideo from './Assets/LargeFiles/FoleyStudy.mp4';
import TraydPostVideo from './Assets/LargeFiles/TraydPostStudy.mp4';
import UpQuestVideo from './Assets/LargeFiles/UpQuestStudy.mp4';




export default function App() {
  const [ isInternalRoute , setIsInternalRoute ] = useState(false);
  const projectsData = [
    {
        index: 0,
        chapter: "00 ::",
        title: "Planetariyum",
        languages: ["React", "Ruby on Rails", "CSS"],
        timeframe: "Three Weeks - Nov. 2022",
        tagline: "Collaborative Engine",
        body: "Planetariyum is a social platform for creators featuring a digital asset marketplace wrapped in a mini-game.",
        route: "planetariyum",
        video: PlanetariyumVideo,
    },
    {
        index: 1,
        chapter: "01 ::",
        title: "TraydPost",
        languages: ["Next.js", "Solidity", "CSS"],
        timeframe: "One Week - Dec. 2022",
        tagline: "NFT Gallery & Trading dApp",
        body: "Created as a capstone project for Encode Club's Solidity Bootcamp, TraydPost is an ERC721 minting and managing dApp which is optimized for digital asset marketplaces and games. It was built to be ported into Planetariyum.",
        route: "traydpost",
        video: TraydPostVideo,
    },
    {
        index: 2,
        chapter: "02 ::",
        title: "UpQuest!",
        languages: ["CSS", "Ruby", "React", "Sinatra", "SQL"],
        timeframe: "One Week - Oct. 2022",
        tagline: "Track Your Fun",
        body: "UpQuest is a social app for creating city-wide treasure hunts as collections of places to visit and visualizing them as interactive maps.",
        route: "upquest",
        video: UpQuestVideo,
    },
    {
        index: 3,
        chapter: "03 ::",
        title: "Foley.G 3K!",
        languages: ["Javascript", "CSS", "HTML"],
        timeframe: "One Week - Sept. 2022",
        tagline: "Real-Time API Powered Audio Engine",
        body: "Using voice recognition and the Freesound API to dynamically generate soundscapes alongside a speaker. Ideal for DnD campaigns, children's storytelling, and musicians.",
        route: "foley",
        video: FoleyVideo,
    },
]

  return (
    <>
      <Routes>
        <Route path="/" element={<Elliot setIsInternalRoute={setIsInternalRoute} projectsData={projectsData} />} />
        <Route path="/planetariyum" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[0]} />} />
        <Route path="/traydpost" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[1]} />} />
        <Route path="/upquest" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[2]} />} />
        <Route path="/foley" element={<CaseStudy isInternalRoute={isInternalRoute} projectsData={projectsData} project={projectsData[3]} />} />
      </Routes>
    </>
  );
}
