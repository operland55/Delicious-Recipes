import React from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { MenuBtn } from "../atom";

const MenuSide = () => {
	const [Menu, setMenu] = useRecoilState(MenuBtn);
	const navigate = useNavigate();
	const list = ["Home", "about", "menu", "gallery", "blog", "search", "concat"];
	return (
		<nav className="sm-only">
			<ul className={Menu ? "menuItem active sm-only" : "menuItem sm-only"}>
				{list.map((item, key) => (
					<li
						key={key}
						onClick={() => {
							navigate(`/${item}`);
						}}
					>
						{item}
					</li>
				))}
			</ul>

			<div
				className={Menu ? "overly active" : "overly"}
				onClick={() => {
					setMenu((cur) => !cur);
				}}
			></div>
		</nav>
	);
};

export default MenuSide;
