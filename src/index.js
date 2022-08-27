import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./ErrorBoundary";
import { UserProvider } from "./context/UserContext";
import { TarotCardProvider } from "./context/TarotCardContext";
import { ReadingsProvider } from "./context/ReadingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ErrorBoundary>
		<UserProvider>
			<ReadingsProvider>
				<TarotCardProvider>
					<App />
				</TarotCardProvider>
			</ReadingsProvider>
		</UserProvider>
	</ErrorBoundary>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
