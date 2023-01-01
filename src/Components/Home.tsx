import React from "react";
import HomeAbout from "./About/HomeAbout";
import HomeGallery from "./Gallery/HomeGallery";

// import Banner from "./Home/banner";
import HomeMenu from "./Menu/HomeMenu";
import Question from "./Question";
import SearchRecipe from "./Search/SearchRecipe";
const Home = () => {
	return (
		<>
			{/* <Banner /> */}
			<HomeAbout />
			<HomeMenu />
			<Question />
			<HomeGallery />
			<SearchRecipe />
		</>
	);
};

export default Home;
