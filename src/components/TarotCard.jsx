import React, { useState } from "react";

function TarotCard({ card }) {
	const [revealCard, setRevealCard] = useState(false);
	const { name, name_short, type, suit, meaning, orientation, desc } = card;

	return (
		<article className="card flex flex-col basis-1/3 px-2.5">
			<div className="section-left card-image">
				<button
					onClick={(e) => {
						e.preventDefault();
						setRevealCard(true);
					}}
				>
					<picture
						className={
							!revealCard
							? "face-back"
							: "face-front"
						}
					>
						<img
							className={
								orientation === "reversed"
									? "card-face transform rotate-180"
									: "card-face"
							}
							src={
								!revealCard
									? "../../images/cards/tarot-back-527.jpg"
									: `../../images/cards/${name_short}.jpg`
							}
							alt={!revealCard ? "Tarot card face down" : `${name}`}
							height="400px"
						/>
					</picture>
				</button>
			</div>
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
