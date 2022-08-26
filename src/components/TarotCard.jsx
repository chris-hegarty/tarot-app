import React, { useState } from "react";

function TarotCard({ card }) {
	const [revealCard, setRevealCard] = useState(false);
	const { name, name_short, type, suit, meaning, desc } = card;

	return (
		<article className="card flex flex-wrap">
			<div className="section-left card-image">
				<button
					onClick={(e) => {
						e.preventDefault();
						setRevealCard(true);
					
					}}
				>
					<picture>
						<img
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
						? "section-right card-meaning invisible"
						: "section-right card-meaning"
				}
			>
				<h3>{name}</h3>
				<div className="card-suit-and-type">
					<p>Suit: {suit}</p>
					<p>Type: {type}</p>
				</div>
				<h4>Meaning</h4>
				<p>{meaning}</p>
				{/* <h4>Meaning reverse placeholder.</h4>
				<p>
					Could be multiple lines of text. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Quam iure consectetur ducimus eaque? Non
					a natus eius voluptate. Esse qui animi molestias voluptate minima
					perspiciatis neque sint nobis omnis accusamus!
				</p> */}
				<h4>Description</h4>
				<p>{desc}</p>
			</div>
		</article>
	);
}

export default TarotCard;
