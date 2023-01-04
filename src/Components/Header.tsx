import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

import { useRecoilState } from "recoil";
import { MenuBtn } from "../atom";
const Header = () => {
	const [Menu, setMenu] = useRecoilState(MenuBtn);
	const navigate = useNavigate();
	const list = [
		"Home",
		"About",
		"Menu",
		"Gallery",
		"Blog",
		"Search",
		"Contact",
	];

	return (
		<nav>
			<div className="top-header">
				<div
					className="logo"
					onClick={() => {
						navigate("/");
					}}
				>
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
						<li
							key={key}
							onClick={() => {
								navigate(item === "Home" ? `/` : `${item}`);
								window.scrollTo(0, 0);
							}}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
