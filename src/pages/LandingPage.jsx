import React from "react";
import Hero from "../components/landing/Hero";
import Reason from "../components/landing/Reason";
import MyVision from "@/components/landing/MyVision";
import Schedule from "@/components/landing/Schedule";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Reason />
      <MyVision />
      <Schedule />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
