import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ProtectedRoute from "./shared/ProtectedRoute";
import { UserContext } from "./context/UserContext";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";

function App() {
	//*set state for "loading" and get "verify" from UserContext:
	const [loading, setLoading] = useState(true);
	const { verify } = useContext(UserContext);
	useEffect(() => {
		async function init() {
			await verify();
			setLoading(false);
		}
		init();
	}, []);
	//*Ignore the dependency message...you only want this to run once when the app starts.
	//Now, if loading is true...return.
	if (loading) {
		return <></>;
	}
	return (
		<Router>
			<Menu />
			<header className="flex center">
				<div>
					<h1>Tarot Reading</h1>
				</div>
			</header>
			<Routes>
				<Route
					path="/login"
					element={
						<ProtectedRoute requiresLogin={false} component={<LoginPage />} />
					}
				/>
				<Route
					path="/register"
					element={
						<ProtectedRoute
							requiresLogin={false}
							component={<RegisterPage />}
						/>
					}
				/>
				<Route
					path="/home"
					element={
						<ProtectedRoute requiresLogin={true} component={<HomePage />} />
					}
				/>
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</Router>
	);
}

export default App;
