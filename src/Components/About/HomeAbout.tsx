import React from "react";
import FoodImg from "../../assets/foodpic.jpg";
const HomeAbout = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="about">
						<div className="about-info">
							<h1>About Our Story</h1>
							<p>
								Who are in extremely love with eco friendly system. Lorem ipsum
								dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>

							<button>view full menu</button>
						</div>
						<div className="about-img">
							<img src={FoodImg} alt="Food-img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
