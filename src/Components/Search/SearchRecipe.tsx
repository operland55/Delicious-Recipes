import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchRecipe = () => {
	return (
		<div className="recipe">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="recipe-search">
							<h1>Find a Recipe</h1>

							<form>
								<div className="inputBox">
									<BsSearch />
									<input type="text" placeholder="Enter Recipe" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchRecipe;
