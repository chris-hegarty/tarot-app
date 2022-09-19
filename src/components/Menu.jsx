import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Menu() {
	//Need the following pieces for the logged out button:
	//loggedInUser && logout from UserConetxt
	const { loggedInUser, logout } = useContext(UserContext);

	return (
		<>
			<nav className="flex justify-between px-8 py-2 items-center text-white">
				<div className="logo-container flex items-center gap-4">
					<picture>
						<img src="../images/logo-110.png" alt="site-logo" width="80" />
					</picture>
					<p className="hidden sm:block text-4xl logo-font">Tarot</p>
				</div>
				<ul className="flex gap-2 md:gap-6 ">
					{loggedInUser && (
						<>
							<li className="flex content-center">
								<NavLink to={"/home"}>Home</NavLink>
							</li>
							<li className="flex content-center">
								<NavLink
									onClick={() => {
										logout();
									}}
									to={"/login"}
								>
									Logout
								</NavLink>
							</li>
						</>
					)}
					{/* Now set what the NOT loggedin user sees:  */}
					{!loggedInUser && (
						<>
							<li className="flex content-center">
								<NavLink to="/login">Login</NavLink>
							</li>
							<li className="flex content-center">
								<NavLink to="/register">Register</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</>
	);
}

export default Menu;
