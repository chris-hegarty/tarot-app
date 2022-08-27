const query = require("../config/database.config");
const bcrypt = require("bcrypt");

async function add(reading) {
	try {
		let { insertId } = await query(
			"INSERT into readings(card_id, user_id, name, name_short, type, suit, orientation, meaning, description) VALUES (?,?,?,?,?,?,?,?,?)",
			[
				reading.name_short,
				reading.user_id,
				reading.name,
				reading.name_short,
				reading.type,
				reading.suit,
				reading.orientation,
				reading.meaning,
				reading.description,
			],
		);
		return { success: true, data: { ...reading, id: insertId }, error: null };
	} catch (err) {
		console.log(err);
		// set up  return object
		return {
			success: false,
			data: null,
			error: "Something went wrong",
		};
	}
}

async function getByUser(user_id) {
	try {
		const readings = await query(
			"SELECT * FROM readings where readings.user_id = ?",
			[user_id],
		);
		return { success: true, data: favorites, error: null };
	} catch (err) {
		console.log(err);
		return { success: false, data: null, error: "Something went wrong" };
	}
}

module.exports.add = add;
module.exports.getByUser = getByUser;
