import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DetailBtn } from "../../atom";

const SearchList = () => {
	const setBtn = useSetRecoilState(DetailBtn);
	const api = "d9ed831d48d94f28b8f9aa33d2de1a8a";
	const navigate = useNavigate();
	const [searchedRecipes, setSearchedRecipes] = useState<any[]>([]);
	const searchName = useParams();
	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
	};

	useEffect(() => {
		getSearched(searchName.title);
	}, [searchName.title]);
	return (
		<>
			<ul className="searchList">
				{searchedRecipes.length == 0 ? (
					<h1>Not Data</h1>
				) : (
					searchedRecipes?.map((item, key) => (
						<li key={key}>
							<div className="img-box">
								<img
									src={`${item?.image}`}
									alt="Food-Img"
									onClick={() => {
										navigate(`/search/${searchName.title}/${item.id}`);
										setBtn(true);
									}}
								/>
								<p>{item?.title}</p>
							</div>
						</li>
					))
				)}
			</ul>
		</>
	);
};

export default SearchList;
