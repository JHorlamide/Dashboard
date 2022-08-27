import React from "react";
import Viewcourses from "pages/Viewcourses";
import DesktopThree from "pages/DesktopThree";
import Startaproject from "pages/Startaproject";
import Glossary from "pages/Glossary";
import Facilitator from "pages/Facilitator";
import Photovidoes from "pages/Photovidoes";
import DesktopOne from "pages/DesktopOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktopone" element={<DesktopOne />} />
        <Route path="/photovidoes" element={<Photovidoes />} />
        <Route path="/facilitator" element={<Facilitator />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/startaproject" element={<Startaproject />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
        <Route path="/viewcourses" element={<Viewcourses />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
