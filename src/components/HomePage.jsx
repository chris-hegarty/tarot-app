import React, { useState, useContext } from "react";
import useAxios from "../hooks/useAxios";
import { TarotCardContext } from "../context/TarotCardContext";
import TarotCard from "./TarotCard";

function HomePage(props) {
	const [show, setShow] = useState(false);
	const [url, setUrl] = useState("");
	const { data: cards, error } = useAxios(url);
	const { revealCard, setRevealCard } = useContext(TarotCardContext);

	return (
		<main>
			<section className="home-top flex">
				<div className="half left basis-1/2 p-16">
					<h2 className="">Getting Started</h2>
					<p>
						Use this three-card, linear spread to think about a path, or sequence of
						events, such as:
					</p>
					<ul>
						<li>Past | Present | Future</li>
						<li>A Situation | An Action | An Outcome</li>
						<li>Option 1 | Option 2 | Advice/Direction</li>
					</ul>
					<p>When you are ready, click the button below to get three cards.</p>
				</div>
				<div className="half right basis-1/2">
					<picture>
						<img
							src="../../images/card-mix.png"
							alt="Mix of Tarot Cards."
							width="600"
							className="p-16 rounded"
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
							// setMeaning()
						}}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Get Cards
					</button>
				</div>
				<div
					className={
						!show ? "hidden three-card-container" : "three-card container"
					}
				>
					<p>
						Now, one by one, click to to reveal the card and its description.
					</p>
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
			</section>
		</main>
	);
}

export default HomePage;
