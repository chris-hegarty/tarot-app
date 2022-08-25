import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards"; // If all of them go to something like https://www.omdb.api this would go there

export default function useAxios(url) {
	// This hook uses state management AND hooks
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function init() {
			if (url.length === 0) {
				return;
			}
			setData(null);
			setError(null);
			try {
				const response = await axios.get(baseUrl + url);
				// console.log(response.data.cards);
				const cards = response.data.cards.map((val) => ({
					name: val.name,
					name_short: val.name_short,
					type: val.type,
					meaning_up: val.meaning_up,
					meaning_rev: val.meaning_rev,
                    desc: val.desc
				}));
				
				setData(cards);
				// console.log(cards);
			} catch (e) {
				setError("Something went wrong, please try again later");
			}
		}
		init();
	}, [url]);

	// Exposes the data, any error, and whether or not it was loading
	return { data, error };
}
