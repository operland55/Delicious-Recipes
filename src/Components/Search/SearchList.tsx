import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchList = () => {
	const api = "7d141da6f44b471d9643dc861ff6cc00";
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
