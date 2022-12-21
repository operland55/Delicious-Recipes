import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../Img/Logo.png";

import { useRecoilState } from "recoil";
import { MenuBtn } from "../atom";
const Header = () => {
	const [Menu, setMenu] = useRecoilState(MenuBtn);
	const list = ["Home", "about", "menu", "gallery", "blog", "search", "concat"];
	return (
		<nav>
			<div className="top-header">
				<div className="logo">
					<img src={Logo} alt="Logo-img" />
				</div>
			</div>

			<div className="bottom-header active">
				<p className="sm-only">Menu</p>
				<div className="menu-icon  sm-only">
					{Menu ? (
						<AiOutlineClose />
					) : (
						<AiOutlineMenu
							onClick={() => {
								setMenu((cur) => !cur);
							}}
						/>
					)}
				</div>

				<ul className="md-only">
					{list.map((item, key) => (
						<li key={key}>{item}</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
