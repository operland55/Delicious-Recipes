import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const AboutBanner = () => {
	const location = useLocation();
	console.log(location);

	const name = location.pathname.replace("/", "");
	return (
		<div className="aboutbanner">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="title">
							<h1>{name}</h1>
							<p>
								Home <AiOutlineArrowRight />
								{name}{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutBanner;
