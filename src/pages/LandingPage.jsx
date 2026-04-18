import React from "react";
import Hero from "../components/landing/Hero";
import Reason from "../components/landing/Reason";
import MyVision from "@/components/landing/MyVision";
import Schedule from "@/components/landing/Schedule";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Reason />
      <MyVision />
      <Schedule />
    </div>
  );
};

export default LandingPage;
