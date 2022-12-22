import React from "react";
import { SiNotion } from "react-icons/si";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const Footer_bottom = () => {
	return (
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="footer-bottom-contact">
							<p>
								Rainsnowcloud restaurant food recipe site <span>♥</span>
							</p>

							<div className="footer-icons">
								<SiNotion />
								<AiFillFacebook />
								<BsTwitter />
								<FaInstagramSquare />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer_bottom;
