
import React, { createContext } from "react";
// import useAxios from "../hooks/useAxios";
export const TarotCardContext = createContext(null);

export function TarotCardProvider(props){
	
    

	return (
		<TarotCardContext.Provider value={{ }}>
			{props.children}
		</TarotCardContext.Provider>
	);
}


