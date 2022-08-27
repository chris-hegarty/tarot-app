require("dotenv").config();

const userRoutes = require("./server/routes/users.routes");
const readingsRoutes = require("./server/routes/readings.routes");

const passport = require("./server/config/passport.config");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.use("/api/users", userRoutes);
app.use("/api/readings", readingsRoutes);

app.get("*", (req, res) => {
	return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => {
	console.log(
		`The server is up and running. The app is listening on Port ${PORT}`,
	);
});
