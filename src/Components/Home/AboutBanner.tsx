import React from "react";
import { useLocation } from "react-router-dom";

const AboutBanner = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div className="aboutbanner">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<h1>Home &gt {location.pathname}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutBanner;
