import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/desktopone">DesktopOne</Link>
        </li>
        <li>
          <Link to="/photovidoes">Photovidoes</Link>
        </li>
        <li>
          <Link to="/facilitator">Facilitator</Link>
        </li>
        <li>
          <Link to="/glossary">Glossary</Link>
        </li>
        <li>
          <Link to="/startaproject">Startaproject</Link>
        </li>
        <li>
          <Link to="/desktopthree">DesktopThree</Link>
        </li>
        <li>
          <Link to="/viewcourses">Viewcourses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
