import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>
        <h1>About Us</h1>
        <button onClick={goHome}>Go Home</button>
      </div>
    </>
  );
};

export default AboutUs;
