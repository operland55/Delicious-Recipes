import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutBanner from "../Home/AboutBanner";
import MenuSide from "../MenuSide";
import { AiOutlineClose } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { DetailBtn } from "../../atom";
function SearchDetail() {
	const [details, setDetails] = useState<any>();
	const setBtn = useSetRecoilState(DetailBtn);
	const api = "d9ed831d48d94f28b8f9aa33d2de1a8a";
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
	console.log("ssss", details?.extendedIngredients);
	return (
		<>
			<div className="detail">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="detail-info">
								<AiOutlineClose
									onClick={() => {
										setBtn(false);
									}}
								/>
								<div className="textImgBox">
									<p>{details?.title}</p>
									<div className="img-box">
										<img src={details?.image} alt={details?.title}></img>
									</div>
								</div>
								<ul className="recipe-lists">
									<li>
										<h1>Ingredients</h1>
									</li>
									{details?.extendedIngredients.map((ingredient, index) => {
										return (
											<>
												<li key={ingredient.id}>
													{index + 1}: {ingredient.original}
												</li>
											</>
										);
									})}
								</ul>
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
