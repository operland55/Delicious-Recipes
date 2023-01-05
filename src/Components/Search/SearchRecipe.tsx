import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchApi } from "../../api";
import { DetailBtn } from "../../atom";
import SearchDetail from "./SearchDetail";
import SearchList from "./SearchList";
const SearchRecipe = () => {
	const Btn = useRecoilValue(DetailBtn);
	const [input, setInput] = useState("");

	const navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/search/${input}`);
	};
	return (
		<>
			<div className="recipe active">
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

			{Btn ? <SearchDetail /> : null}
		</>
	);
};

export default SearchRecipe;
