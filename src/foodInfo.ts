import BreakFood from "./assets/galleryPic1.jpg";
import BreakFood2 from "./assets/galleryPic2.jpg";
import DinnerFood from "./assets/galleryPic3.jpg";
import BuffetFood from "./assets/galleryPic4.jpg";
import LunchFood from "./assets/galleryPic5.jpg";
import BudgetFood from "./assets/foodpic.jpg";

export const MenuList = [
	"All Menu",
	"Breakfast",
	"Lunch",
	"Dinner",
	"Budget Meal",
	"Buffet",
];

export const MenuInfo = [
	{
		name: "Cappuccion",
		price: "$49",
		Explanation:
			"Usage of the Internet is becoming more common due to rapid advance.",
		eatingTime: "Breakfast",
		img: `${BreakFood}`,
	},
	{
		name: "Americano",
		price: "$39",
		Explanation:
			"Usage of the Internet is becoming more common due to rapid advance.",
		eatingTime: "Dinner",
		img: `${DinnerFood}`,
	},
	{
		name: "Mocha",
		price: "$29",
		Explanation:
			"Usage of the Internet is becoming more common due to rapid advance.",
		eatingTime: "Breakfast",
		img: `${BreakFood2}`,
	},
	{
		name: "Piccolo Latte",
		price: "$49",
		Explanation:
			"Usage of the Internet is becoming more common due to rapid advance.",
		eatingTime: "Lunch",
		img: `${LunchFood}`,
	},
	{
		name: "Ristretto",
		price: "$19",
		Explanation:
			"Usage of the Internet is becoming more common due to rapid advance.",
		eatingTime: "Buffet",
		img: `${BuffetFood}`,
	},
	{
		name: "Egg",
		price: "$19",
		Explanation:
			"Usage of the Internet is becoming more common due to rapid advance.",
		eatingTime: "Budget Meal",
		img: `${BudgetFood}`,
	},
];
