import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards/"; // If all of them go to something like https://www.omdb.api this would go there

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
			// This is with fetch, but it could just as easily be with axios
			try {
				// OR USING AXIOS
				const response = await axios.get(baseUrl + url);
				const cards = response.data.data.map((val) => ({
					name: val.cards.name,
					name_short: val.cards.name_short,
					type: val.cards.type,
					meaning_up: val.cards.meaning_up,
					meaning_rev: val.cards.meaning_rev,
                    desc: val.cards.desc
				}));
				setData(cards);
			} catch (e) {
				setError("Something went wrong, please try again later");
			}
		}
		init();
	}, [url]);

	// Exposes the data, any error, and whether or not it was loading
	return { data, error };
}
