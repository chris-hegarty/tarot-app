// import React from 'react'
// import { ReadingsContext } from "../context/ReadingsContext";
// import { UserContext } from "../context/UserContext";
// import TarotCard from "./TarotCard";

// function ReadingsPage() {
//     const {readings, add, remove} = useContext(ReadingsContext)
//     const { loggedInUser } = useContext(UserContext);
//   return (
// 		<main>
// 			<h1>Welcome to your Readings page.</h1>
// 			<h2>Save and review your readings here.</h2>

// 			<section>
// 				<h3>My saved readings</h3>
// 				<section className="readings">
// 					<ul>
// 						{cards &&
// 							cards.length > 0 &&
// 							cards.map((c) => (
// 								<li>
// 									<TarotCard
// 										card={c}
// 										key={idx}
// 										name_short={c.name_short}
// 										name={c.name}
// 										type={c.type}
// 										suit={c.suit}
// 										meaning={c.meaning}
// 										desc={c.desc}
// 										revealCard={revealCard}
// 										setRevealCard={setRevealCard}
// 									/>
// 								</li>
// 							))}
// 					</ul>
// 				</section>
// 			</section>
// 		</main>
// 	);
// }

// export default ReadingsPage