import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { searchApi } from "../../api";
import SearchList from "./SearchList";
const SearchRecipe = () => {
	const [input, setInput] = useState("");
	const { data: searchData, isLoading } = useQuery("search", () => {
		return searchApi(input);
	});
	const navigate = useNavigate();
	let values = searchData?.results;
	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/search/${input}`);
	};
	return (
		<div className="recipe">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="recipe-search">
							<h1>Find a Recipe</h1>
							<form onSubmit={submitHandler}>
								<div className="inputBox">
									<BsSearch />
									<input
										type="text"
										placeholder="Enter Recipe"
										value={input}
										onChange={(e) => {
											setInput(e.target.value);
										}}
									/>
								</div>
							</form>

							<SearchList />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchRecipe;
