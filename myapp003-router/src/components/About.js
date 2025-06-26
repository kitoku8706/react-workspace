import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>About Start</h3>
      <Outlet />
    </div>
  );
};

export default About;
