import React from "react";
import { useRecoilValue } from "recoil";
import { MenuBtn } from "../../atom";
import Header from "../Header";
import MenuSide from "../MenuSide";

const Banner = () => {
	const Menu = useRecoilValue(MenuBtn);

	return (
		<div className="banner">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div>
							<Header />
							<MenuSide />
							<div className="banner-area">
								<h6>WIDE OPTIONS OF CHOICE</h6>
								<h1>Delicious Recipes</h1>
								<p>
									inappropriate behavior is often laughed off as “boys will be
									boys,” women face higher conduct standards especially in the
									workplace. That’s why it’s crucial that, as women.
								</p>

								<button>Check our Menu</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
