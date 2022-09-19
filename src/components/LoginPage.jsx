import React, { useContext, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const { login } = useContext(UserContext);

	//* Add error checking for username and password requirements:
	const passError = useMemo(
		() => password.length < 8 || password.length > 30,
		[password],
	);
	const userError = useMemo(
		() => username.length < 4 || username.length > 20,
		[username],
	);
	return (
		<>
			<main className="main login-register md:flex md:justify-center md:items-center">
				<form className="flex justify-center">
					<div className="form-container p-10">
						<div className="form-element flex flex-col">
							<h2 className="lr-headers text-white text-3xl text-center">
								Login
							</h2>
							<label htmlFor="user-name">Username</label>
							<input
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								id="user-name"
								type="text"
								className="rounded-lg bg-white"
							/>
						</div>

						<div className="flex flex-col form-element mb-4">
							<label htmlFor="password">Password</label>
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								id="password"
								type={show === true ? "text" : "password"}
								className="rounded-lg"
							/>
							<span className="flex items-center justify-end">
								<label htmlFor="check-box">Show Password</label>
								<input
									value={show}
									onChange={(e) => {
										setShow(e.target.checked);
									}}
									type="checkbox"
									name="register-checkbox"
									id="check-box"
									className="ml-2 mb-0"
								/>
							</span>
						</div>
						<div className="">
							<button
								//* If any errors, set the button to disabled:
								disabled={passError || userError}
								onClick={(e) => {
									e.preventDefault();
									//* If no errors, allow register function to fire:
									if (!passError && !userError) {
										login(username, password);
									}
								}}
								type="submit"
								className="text-lg uppercase w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
						</div>

						<div className="to-login form-element my-6">
							<p>
								<NavLink to="/register">
									Don't have an account? Register here
								</NavLink>
							</p>
						</div>
					</div>
				</form>
			</main>
		</>
	);
}

export default LoginPage;
