import "./App.css";
import { Routes, Route } from "react-router-dom";

import Elliot from "./Components/Elliot";
import OneSeventyFour from "./Components/OneSeventyFour";
import Foley from "./Components/Foley";
import Mountain from "./Components/Mountain";
import UpQuest from "./Components/UpQuest";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Elliot />} />
        <Route path="/UpQuest" element={<UpQuest />} />
        <Route path="/174" element={<OneSeventyFour />} />
        <Route path="/Foley" element={<Foley />} />
        <Route path="/Mountain" element={<Mountain />} />
      </Routes>
    </>
  );
}
