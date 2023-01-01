import React, { useState } from "react";
import { MenuInfo, MenuList } from "../../foodInfo";
const HomeMenu = () => {
	const [eatTime, setEatTime] = useState("menu-filter-item invisible");
	const filter = (e) => {
		const filter = e.currentTarget.dataset.filter;

		MenuInfo.forEach((item) => {
			if (filter === "All Menu" || filter == item.eatingTime) {
				setEatTime("menu-filter-item invisible");
				console.log("eat", item.eatingTime);
				console.log("filter", filter);
			} else {
				setEatTime("menu-filter-item");
			}
		});
	};

	return (
		<div className="HomeMenu">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="menu">
							<div className="menu-title">
								<h1>What kind of Foods we serve for you</h1>
								<p>who are in extremely love with eco friendly system</p>
							</div>

							<ul className="menu-list">
								{MenuList.map((item, key) => (
									<li key={key} data-filter={item} onClick={filter}>
										{item}
									</li>
								))}
							</ul>

							<div className="menu-filter">
								{MenuInfo.map((item, key) => (
									<div
										className={eatTime}
										key={key}
										data-name={item.eatingTime}
									>
										<div className="menu-filter-info">
											<div className="menu-filter-info-name">
												<h3>{item.name}</h3>
												<p>{item.price}</p>
											</div>
											<div className="menu-filter-explan">
												{item.Explanation}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeMenu;
