import React from "react";
import Hero from "./Hero";
import ExploreActivity from "./ExploreActivity";
import ExtremeSkiing from "./ExtremeSkiing";
import LeavePlanning from "./LeavePlanning";
import ChooseAdventure from "./ChooseAdventure";
import DataTesting from "./DataTesting";
import ImgwithBackground from "./ImgwithBackground";
import PricingPlan from "./PricingPlan";
const HomePage = () => { 

    return (
      <div className="contianer">
        <Hero />
        <ExploreActivity />
        <ExtremeSkiing />
        <LeavePlanning />
        <ChooseAdventure />
        <ImgwithBackground />
        <PricingPlan />
      </div>
    );
        



}
export default HomePage;