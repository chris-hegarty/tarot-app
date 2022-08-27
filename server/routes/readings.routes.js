const express = require("express");
const router = express.Router();
const { add, remove, getByUser } = require("../models/readings.model");
const auth = require("../middleware/auth.middleware");

router.put("/add", auth, async (req, res) => {
	const reading = req.body;
	if (
		!reading.name_short ||
		!reading.user_id ||
		!reading.name ||
		!reading.name_short ||
		!reading.type ||
		!reading.suit ||
		!reading.orientation ||
		!reading.meaning ||
		!reading.description
	) {
		return res.send({
			success: false,
			data: null,
			error: "Invalid data provided",
		});
	}
	const resObj = await add({ ...reading, user_id: req.user.id });
	return res.send(resObj);
});

router.get("/user", auth, async (req, res) => {
	const resObj = await getByUser(req.user.id);

	return res.send(resObj);
});

module.exports = router;
