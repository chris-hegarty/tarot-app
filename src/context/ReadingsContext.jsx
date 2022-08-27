import React, { createContext, useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const ReadingsContext = createContext(null);

export function ReadingsProvider(props) {
	const [readings, setReadings] = useState([]);
	const { loggedInUser } = useContext(UserContext);

	//*Start with useEffect, so when loggedInUser changes...
	//*...you pull in their readings.
	//*Two params: A cb function and dependency array.
	//*     useEffect(()=>{},[])

	useEffect(() => {
		//*first check if there is not already a logged in user.
		//* (user is not null).
		if (!loggedInUser) {
			return;
		}
		//*Now write a function to make a GET request to readings.
		async function init() {
			try {
				const response = await axios.get(`api/readings/user`);
				//* If successful, now setReadings with the data we got back.
				if (response.data.success) {
					setReadings(response.data.data);
				}
			} catch (err) {
				console.log(err);
			}
		}
		//* now immediately call the init() function:
		init();
		//*set the dependeny array to watch the loggedInUser.
	}, [loggedInUser]);

	//*set add functionality
	const add = useCallback(
		async (card) => {
			try {
				const response = await axios.put("/api/readings/add", card);
				if (response.data.success) {
					setReadings((curr) => [...curr, response.data.data]);
				}
				// console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		},
		[setReadings],
	);

	//*delete/remove functionality:

	//*Updated to connect to server/db
	//*Make an API call DELETE api/favorites/delete/${loggedInUser.id}
	const remove = useCallback(
		async (card_id) => {
			try {
				const response = await axios.delete(`/api/readings/delete/${card_id}`);
				if (response.data.success) {
					setReadings((curr) => curr.filter((val) => val.card_id !== card_id));
				}
			} catch (err) {
				console.log(err);
			}
		},
		[setReadings],
	);

	return (
		<ReadingsContext.Provider value={{ readings, add, remove }}>
			{props.children}
		</ReadingsContext.Provider>
	);
}
