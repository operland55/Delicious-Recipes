import React from "react";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const HomeContact = () => {
	const myInfo = [
		{
			icon: <AiOutlineHome />,
			info: "서울 서초구 방배동 드림하우스",
		},
		{
			icon: <AiOutlinePhone />,
			info: "010-5758-9884",
		},
		{
			icon: <AiOutlineMail />,
			info: "operland55@naver.com",
		},
	];

	return (
		<div className="contactContainer">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.6468812399835!2d126.98861270635682!3d37.4884067398551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe414ac40250c4a59!2z65Oc66a87ZWY7Jqw7Iqk!5e0!3m2!1sko!2skr!4v1672734096864!5m2!1sko!2skr"
								width="600"
								height="450"
								// referrerpolicy="no-referrer-when-downgrade"
								// allowfullscreen=""
								loading="lazy"
							></iframe>
						</div>

						<main className="contact-wrapper">
							<div className="contactInfo">
								<ul>
									{myInfo.map((item, key) => (
										<li key={key}>
											<div className="icon">{item.icon}</div>
											<p>{item.info}</p>
										</li>
									))}
								</ul>
							</div>

							<form className="contact-form">
								<div className="input-wrapper">
									<div className="input-box">
										<input type="text" placeholder="Enter Your Name" />
									</div>
									<div className="input-box">
										<input type="email" placeholder="Enter email address" />
									</div>
									<div className="input-box">
										<input type="text" placeholder="Enter subject" />
									</div>
								</div>

								<div className="button-wrapper">
									<div className="text-box">
										<textarea placeholder="Enter Message"></textarea>
									</div>
									<div className="button-box">
										<button>Send Message</button>
									</div>
								</div>
							</form>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContact;
