
import React, { useState, createContext } from "react";
// import useAxios from "../hooks/useAxios";
export const TarotCardContext = createContext(null);

export function TarotCardProvider(props){
	const [revealCard, setRevealCard] = useState(false);

	//**** Example from Trivia App:
	// ****Here is where you set your api data into contexts you've set up for card and category. ex: setQuestion turns question into the "question" part from the API url:
	//* useEffect(() => {
	//* 	if (card) {
	//* 		setQuestion(card.question);
	//* 		setAnswers(card.choices);
	//* 	}
	//* }, [card, setQuestion, setAnswers, setSelected]);

	//TODO - Put the axios call in a function that you can call in the Home page button.

	return (
		<TarotCardContext.Provider
			value={{ revealCard, setRevealCard }}
		>
			{props.children}
		</TarotCardContext.Provider>
	);
}
