import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutBanner from "../Home/AboutBanner";
import MenuSide from "../MenuSide";

function SearchDetail() {
	const [details, setDetails] = useState<any>();
	// const [activeTab, setActiveTab] = useState("instructions");
	const api = "7d141da6f44b471d9643dc861ff6cc00";
	const detail = useParams();
	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${detail.id}/information?apiKey=${api}`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [detail.id]);
	console.log("ssss", details);
	return (
		<>
			<AboutBanner />

			<div className="detail">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div>
								<h2>{details?.title}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<MenuSide />
		</>
	);
}

export default SearchDetail;
