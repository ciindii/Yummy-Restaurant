import React from "react";
import MenuScreen from "./MenuScreen";
import AdsJumbotron from "../components/AdsJumbotron";

const HomeScreen = () => {
  return (
    <div className="ml-auto">
      <AdsJumbotron />
      <MenuScreen />
    </div>
  );
};

export default HomeScreen;
