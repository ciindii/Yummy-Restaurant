import React from "react";
import MenuScreen from "./MenuScreen";
import AdsJumbotron from "../components/AdsJumbotron";

const HomeScreen = () => {
  return (
    <div className="ml-auto">
      <AdsJumbotron />
      <div className="mt-5"></div>
      <MenuScreen />
    </div>
  );
};

export default HomeScreen;
