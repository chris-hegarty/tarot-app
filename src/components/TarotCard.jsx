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
							className={
								revealCard
									? "card-back flipped bg-black rounded-lg"
									: "card-back"
							}
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
						: "section-right card-meaning flex flex-col items-stretch sp-2 border-gray-200 border-2 justify-items-stretch rounded-xl shadow-xl mt-4 p-4"
				}
			>
				<div className="flex flex-col justify-center items-center p-2 bg-yellow-500 rounded-lg">
					<h3 className="text-3xl mb-0">{name}</h3>
					<p className="uppercase font-bold text-sm mb-0">
						Orientation: {orientation}
					</p>
				</div>
				<div className="my-4">
					<p className="mb-0">{desc}</p>
				</div>
				<hr className="my-4"></hr>
				<div className="meaning">
					<span>Meaning: </span>
					<span>{meaning}</span>
				</div>
				<div className="card-suit-and-type flex justify-between gap-4 mt-4">
					<div className="flex gap-1">
						<h4 className="mb-0">Suit:</h4>
						<p className="capitalize mb-0"> {suit}</p>
					</div>
					<div className="flex gap-1">
						<h4 className="capitalize mb-0">Type:</h4>
						<p className="capitalize mb-0">{type}</p>
					</div>
				</div>
			</div>
		</article>
	);
}

export default TarotCard;
