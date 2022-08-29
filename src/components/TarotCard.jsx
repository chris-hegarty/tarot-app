import React, { useState } from "react";

function TarotCard({ card }) {
	const [revealCard, setRevealCard] = useState(false);
	const { name, name_short, type, suit, meaning, orientation, desc } = card;

	return (
		<article className="cards-article flex flex-col basis-1/3 px-2.5">
			<button
				onClick={(e) => {
					e.preventDefault();
					setRevealCard(true);
				}}
				id="flip-card"
			>
				<div className="card-container section-left card-image">
					<picture
						className={
							orientation === "reversed"
								? "card card-face transform rotate-180"
								: "card card-face"
						}
					>
						<img
							src={`../../images/cards/${name_short}.jpg`}
							alt={`${name}`}
							className={revealCard ? "card-back flipped" : "card-back"}
							id="back"
						/>
						<img
							src="../../images/cards/tarot-back-527.jpg"
							alt="Tarot card face down"
							className={revealCard ? "card-front flipped" : "card-front"}
							id="front"
						/>
					</picture>
				</div>
			</button>
			<div
				className={
					!revealCard
						? "section-right card-meaning hidden"
						: "section-right card-meaning"
				}
			>
				<h3>{name}</h3>
				<div className="card-suit-and-type">
					<p>Suit: {suit}</p>
					<p>Type: {type}</p>
					<p>Orientation: {orientation}</p>
				</div>
				<h4>Meaning</h4>
				<p>{meaning}</p>
				<h4>Description</h4>
				<p>{desc}</p>
			</div>
		</article>
	);
}

export default TarotCard;
