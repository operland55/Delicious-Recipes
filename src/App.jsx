import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu/Menu";
import Search from "./Components/Search/Search";
import SearchDetail from "./Components/Search/SearchDetail";
import SearchList from "./Components/Search/SearchList";

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
					<Route path="/Blog" element={<Blog />}></Route>
					<Route path="/Search" element={<Search />}>
						<Route path="/Search/:title" element={<SearchList />}>
							<Route
								path="/Search/:title/:id"
								element={<SearchDetail />}
							></Route>
						</Route>
					</Route>

					<Route path="/Contact" element={<Contact />}></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
