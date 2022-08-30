
import React, { useContext, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const { login } = useContext(UserContext)

        //* Add error checking for username and password requirements:
      const passError = useMemo(
				() => password.length < 8 || password.length > 30,
				[password],
			);
	  const userError = useMemo(
        ()=> username.length < 4 || username.length > 20,
        [username]
    )
  return (
		<>
			<main className="main login-register flex flex-col justify-center align-middle">
				<form className="flex content-center justify-center">
					<div className="form-container flex flex-col justify-center align-middle p-10">
						<div className="flex flex-col form-element">
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

						<div className="flex flex-col form-element">
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
							<span>
								<label htmlFor="check-box">Show Password</label>
								<input
									value={show}
									onChange={(e) => {
										setShow(e.target.checked);
									}}
									type="checkbox"
									name="register-checkbox"
									id="check-box"
								/>
							</span>
						</div>
						<div>
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
								className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
						</div>

						<div className="to-login form-element my-4">
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

export default LoginPage