import React, { useContext, useState, useMemo } from "react";
// No longer need useNavigate, but will need NavLink:
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function RegisterPage() {
	//*Bring in register function from user context:
	const { register } = useContext(UserContext);
	//local pieces of state
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const [show, setShow] = useState(false);
	const [confirm, setConfirm] = useState("");
	//global pieces of state from context file
	const [show, setShow] = useState(false);

	//*Add error handling:
	//* You will wrap these in useMemo to store the results.
	//* 1) Check if password requirements met:
	const passError = useMemo(
		() => password.length < 8 || password.length > 30,
		[password],
	);
	//* 2) Check if username requirements are met
	const userError = useMemo(
		() => username.length < 4 || username.length > 20,
		[username],
	);
	//* 3) Check if password confirmation passed:
	const confirmError = useMemo(
		() => confirm !== password || passError,
		[confirm, password, passError],
	);
	return (
		<>
			<main className="main login-register flex flex-col justify-center align-middle">
				<form className="flex content-center justify-center">
					<div className="form-container flex flex-col justify-evenly align-middle p-10">
						<div className="flex flex-col form-element">
							<div className="top-level flex justify-between items-center">
								<label htmlFor="user-name">Username</label>
								<div
									id="username-error"
									className={userError ? "error form-text" : "form-text"}
								>
									<p>Must be between 4 and 20 characters.</p>
								</div>
							</div>
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
							<div className="top-level flex justify-between items-center">
								<label htmlFor="password">Password</label>
								<div
									id="password-error"
									className={passError ? "error form-text" : "form-text"}
								>
									<p>Must Be between 8 and 30 characters</p>
								</div>
							</div>
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

						<div className="flex flex-col form-element mb-4">
							<div className="top-level flex justify-between items-center">
								<label htmlFor="password">Confirm Password</label>
								<div
									id="password-error"
									className={passError ? "error form-text" : "form-text"}
								>
									<p>Passwords must match</p>
								</div>
							</div>
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								id="confirm-password"
								type={show === true ? "text" : "password"}
								className="rounded-lg"
							/>
						</div>

						<div>
							<button
								//* If any errors, set the button to disabled:
								disabled={confirmError || passError || userError}
								onClick={(e) => {
									e.preventDefault();
									//* If no errors, allow register function to fire:
									if (!confirmError && !passError && !userError) {
										register(username, password);
									}
								}}
								type="submit"
								className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
						</div>

						<div className="to-login form-element my-6">
							<p>
								<NavLink to="/login">
									Already have an account? Login here.
								</NavLink>
							</p>
						</div>
					</div>
				</form>
			</main>
		</>
	);
}

export default RegisterPage;
