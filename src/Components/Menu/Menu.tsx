import React from "react";
import AboutBanner from "../Home/AboutBanner";
import MenuSide from "../MenuSide";
import Question from "../Question";
import HomeMenu from "./HomeMenu";

const Menu = () => {
	return (
		<>
			<AboutBanner />
			<HomeMenu />;
			<Question />
			<MenuSide />
		</>
	);
};

export default Menu;
