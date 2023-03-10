import React from "react";
import HomeAbout from "./About/HomeAbout";
import HomeContact from "./Contact/HomeContact";
import HomeGallery from "./Gallery/HomeGallery";
import Banner from "./Home/Banner";

import HomeMenu from "./Menu/HomeMenu";
import Question from "./Question";
import SearchRecipe from "./Search/SearchRecipe";
const Home = () => {
	return (
		<>
			<Banner />
			<HomeAbout />
			<HomeMenu />
			<Question />
			<HomeGallery />
			<SearchRecipe />
			<HomeContact />
		</>
	);
};

export default Home;
