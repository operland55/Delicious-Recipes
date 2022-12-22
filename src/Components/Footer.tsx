import React from "react";
import Footer_bottom from "./Footer_bottom";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="footer">
								<div className="footer-info">
									<h3>Opening Hours</h3>

									<ul className="open-time">
										<li className="open-time-info">
											<span>Monday-Friday</span>
											<span>08.00 am - 10.00 pm</span>
										</li>

										<li className="open-time-info">
											<span>Saturday</span>
											<span>08.00 am - 10.00 pm</span>
										</li>

										<li className="open-time-info">
											<span>Sunday</span>
											<span>08.00 am - 10.00 pm</span>
										</li>
									</ul>
								</div>

								<div className="footer-contact">
									<h3>Contact Us</h3>

									<p>
										56/8, los angeles, rochy beach, Santa monica, United states
										of america - 1205
									</p>

									<div className="place">
										<dl>
											<div className="place-info">
												<dt>Address</dt>
												<dd>서울 서초구 방배동 드림하우스</dd>
											</div>
											<div className="place-info">
												<dt>Phone</dt>
												<dd>010-5758-9884</dd>
											</div>
										</dl>
									</div>
								</div>

								<div className="footer-news">
									<h3>Newsletter</h3>
									<p>
										You can trust us. we only send promo offers, not a single
										spam.
									</p>

									<div className="footer-news-email">
										<form>
											<input type="text" placeholder="Your Email address" />
											<button>2</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<Footer_bottom />
		</>
	);
};

export default Footer;
