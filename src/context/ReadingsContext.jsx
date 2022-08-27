import React, { createContext } from "react";
export const ReadingsContext = createContext(null);

export function ReadingsProvider(props){



	return (
		<Readings.Provider value={{ }}>
			{props.children}
		</Readings.Provider>
	);
}