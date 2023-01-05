import React, { useState } from "react";
import { MenuInfo, MenuList } from "../../foodInfo";

const HomeGallery = () => {
	const [value, setValue] = useState(undefined);

	const filter = (e) => {
		let valueArr = e.currentTarget.dataset.filter;
		if (valueArr === "All Menu") {
			setValue(undefined);
		} else {
			setValue(valueArr);
		}
	};

	const gallery = MenuInfo.filter((item) => item.eatingTime === value);

	return (
		<div className="gallery">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="gallery-text">
							<h1>Food and Customer Gallery</h1>
							<p>Who are in extremely love with eco friendly system.</p>
						</div>

						<ul className="gallery-list">
							{MenuList.map((item, key) => (
								<li
									className={`gallery-list-item`}
									key={item}
									data-filter={item}
									onClick={filter}
								>
									{item}
								</li>
							))}
						</ul>

						<ul className="gallery-img">
							{value == undefined
								? MenuInfo.map((item, key) => (
										<li className={`gallery-img-${key + 1}`} key={key}>
											<img src={item.img} alt="Gallery-Img" />
										</li>
								  ))
								: gallery.map((item, key) => (
										<li className={`gallery-img-${key + 1}`} key={key}>
											<img src={item.img} alt="Gallery-Img" />
										</li>
								  ))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomeGallery;
