import React from "react";
import Sandwich from "../../assets/Sandwich.jpg";
import Vegetables from "../../assets/Vegetables.jpg";
import Onion from "../../assets/Onion.jpg";
const AboutServices = () => {
	const servicesInfo = [
		{
			class: "sandwich",
			name: "Bread Fruit Cheese Sandwich",
			img: `${Sandwich}`,
			info: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
		},
		{
			class: "onion",
			name: "Beef Cutlet with Spring Onion",
			img: `${Onion}`,
			info: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
		},
		{
			class: "vegetables",
			name: "Meat with sauce & Vegetables",
			img: `${Vegetables}`,
			info: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
		},
	];

	return (
		<div className="services">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="services-text">
							<h1>What Kind of Services we Offer</h1>
							<p>Who are in extremely love with eco friendly system.</p>
						</div>

						<ul className="services-items">
							{servicesInfo.map((item, key) => (
								<li className={item.class}>
									<div className="img-box">
										<img src={`${item.img}`} alt="img" />
									</div>

									<div className="services-info">
										<h3>{item.name}</h3>
										<p>{item.info}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutServices;
