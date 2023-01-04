import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
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
					<Route path="/Home" element={<Home />}></Route>
					<Route path="/About" element={<About />}></Route>
					<Route path="/Menu" element={<Menu />}></Route>
					<Route path="/Gallery" element={<Gallery />}></Route>
					<Route path="/Search" element={<Search />}></Route>
					<Route path="/Contact" element={<Contact />}></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
