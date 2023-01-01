import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu/Menu";
import Search from "./Components/Search/Search";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route path="/gallery" element={<Gallery />}></Route>
					<Route path="/search" element={<Search />}></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
