import "./App.css";
import { Routes, Route } from "react-router-dom";

import Elliot from "./Components/Elliot";
import CaseStudy from "./Components/CaseStudy";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Elliot />} />
        <Route path="/planetariyum" element={<CaseStudy project={"Planetariyum"} />} />
        <Route path="/traydpost" element={<CaseStudy project={"Traydpost"} />} />
        <Route path="/upquest" element={<CaseStudy project={"Upquest"} />} />
        <Route path="/foley" element={<CaseStudy project={"Foley.G 3K"} />} />
      </Routes>
    </>
  );
}
