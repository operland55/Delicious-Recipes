import React from "react";

const Question = () => {
	return (
		<div className="question-container">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="overlay"></div>
						<div>
							<div className="question">
								<div className="question-text">
									<h2>
										If you have any recipes or other questions, please ask them
										here and I will answer them.
									</h2>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Iure placeat deleniti eum sint veniam eaque fugiat earum
										eligendi, reiciendis animi at, quo perspiciatis nihil
										aspernatur voluptas cumque quibusdam quisquam praesentium?
									</p>
								</div>

								<div className="question-form">
									<form action="submit">
										<div className="question-form-item">
											<input type="text" placeholder="Your Name" />
										</div>
										<div className="question-form-item">
											<input type="text" placeholder="Your Email Address" />
										</div>
										<div className="question-form-item">
											<input type="text" placeholder="Phone Number" />
										</div>
										<div className="question-form-item">
											<select name="question" id="">
												<option value="question">Recipe</option>
												<option value="question">Founded</option>
												<option value="question">Food</option>
												<option value="question">Other</option>
											</select>
										</div>
										<div className="question-form-item">
											<textarea></textarea>
										</div>

										<div className="form-button">
											<button
												onClick={(e) => {
													e.preventDefault();
												}}
											>
												Make Reservation
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
