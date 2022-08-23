const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const jwt = require("jsonwebtoken");

const { register, login } = require("../models/users.model");

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	if (!verifyData(username, password)) {
		return res.send({
			success: false,
			data: null,
			error: "Username and/or password do not match.",
		});
	}
	const resObj = await login(username, password);

	if (resObj.success) {
		const user = resObj.data;
		const token = jwt.sign(user, process.env.SECRET_KEY, {
			expiresIn: "2 days",
		});

		res.cookie("jwt", token, { httpOnly: true });
	}
	res.send(resObj);
});

router.put("/register", async (req, res) => {
	const { username, password } = req.body;
	if (!verifyData(username, password)) {
		return res.send({
			success: false,
			data: null,
			error:
				"Please check that your username and password meet the requirements.",
		});
	}
	//* If the username and password meet the requirements, put them in an object:
	const resObj = await register(username, password);

	res.send(resObj);
});

router.get("/verify", auth, (req, res) => {
	return res.send({
		success: true,
		data: {
			username: req.user.username,
			id: req.user.id,
		},
		error: null,
	});
});

function verifyData(username, password) {
	if (!username || username.length < 4 || username.length > 20) {
		return false;
	}
	if (!password || password.length < 8 || password.length > 30) {
		return false;
	}
	return true;
}

module.exports = router;
