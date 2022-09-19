import React, { useState, useContext, useCallback, useRef } from "react";
import useAxios from "../hooks/useAxios";
import { TarotCardContext } from "../context/TarotCardContext";
import TarotCard from "./TarotCard";

function HomePage(props) {
	const [show, setShow] = useState(false);
	const [url, setUrl] = useState("");
	const { data: cards, error } = useAxios(url);
	const { revealCard, setRevealCard } = useContext(TarotCardContext);

	let cardScroll = useRef(null);

	const handleScroll = () => {
		cardScroll.current.scrollIntoView();
	};

	return (
		<main>
			<section className="home-top flex flex-wrap">
				<div className="half left lg:basis-1/2 lg:p-16 p-4">
					<h2 className="">Getting Started</h2>
					<p>
						First step: Focus on a question, problem, decision or any uncertain
						area on your mind.
					</p>
					<p>
						You are going to get a three-card, "linear" tarot card spread.
						Depending on your focus, the first, second and third cards can
						suggest perspectives in a number of ways, like:
					</p>
					<ul>
						<li>Past | Present | Future</li>
						<li>A Situation | An Action | An Outcome</li>
						<li>Option 1 | Option 2 | Advice/Direction</li>
					</ul>
					<p>
						Think about the question you are focused on, and what three "here to
						there" points the cards could help you think on. Then, scroll down
						and click on "Get Cards".
					</p>
				</div>
				<div className="half right lg:basis-1/2">
					<picture>
						<img
							src="../../images/card-mix.png"
							alt="Mix of Tarot Cards."
							className="lg:p-16 lg:rounded"
						/>
					</picture>
				</div>
			</section>
			<section className="card-section">
				<div className="button-container flex justify-center py-16">
					<button
						onClick={(e) => {
							e.preventDefault();
							setShow(true);
							setUrl(`/random/?n=3`);
							handleScroll();
							// setMeaning()
						}}
						className="text-lg uppercase bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
					>
						Get Cards
					</button>
				</div>
				<div
					className={
						!show ? "cards-container hidden" : "cards-container px-10 py-6 mb-8"
					}
					ref={cardScroll}
				>
					<h2 className="text-center">Now, click on each card to reveal it.</h2>
					<div className="flex justify-evenly px-10 mobile-cards">
						{error && error}
						{cards &&
							cards.length > 0 &&
							cards.map((c, idx) => (
								<TarotCard
									card={c}
									key={idx}
									name_short={c.name_short}
									name={c.name}
									type={c.type}
									suit={c.suit}
									meaning={c.meaning}
									desc={c.desc}
									revealCard={revealCard}
									setRevealCard={setRevealCard}
								/>
							))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default HomePage;
