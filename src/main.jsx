import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RecoilRoot>
		<App />
	</RecoilRoot>
);
