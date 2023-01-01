import React from "react";
import AboutBanner from "../Home/AboutBanner";
import MenuSide from "../MenuSide";
import AboutServices from "./AboutServices";
import HomeAbout from "./HomeAbout";

function About() {
	return (
		<>
			<AboutBanner />
			<MenuSide />
			<HomeAbout />
			<AboutServices />
		</>
	);
}

export default About;
