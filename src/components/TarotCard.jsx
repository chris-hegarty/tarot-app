import React, { useState } from "react";

function TarotCard({card, revealCard, setRevealCard}) {

	const { name, name_short, type, meaning_up, desc } = card;
	return (
		<div className="card flex" id="card-two">
			<div className="section-left card-image">
				<button
					onClick={(e) => {
						e.preventDefault();
						setRevealCard(true);
					}}
				>
					<picture>
						<img
							src="../../images/cards/tarot-back-527.jpg"
							alt="Tarot card face down."
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
				<h3>Title of Card</h3>
				<div className="card-suit-and-type">
					<p>Suit: xxxxxx</p>
					<p>Type: xxxxxx</p>
				</div>
				<h4>Meaning</h4>
				<p>
					Could be multiple lines of text. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Quam iure consectetur ducimus eaque? Non
					a natus eius voluptate. Esse qui animi molestias voluptate minima
					perspiciatis neque sint nobis omnis accusamus!
				</p>
				<h4>Meaning reverse placeholder.</h4>
				<p>
					Could be multiple lines of text. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Quam iure consectetur ducimus eaque? Non
					a natus eius voluptate. Esse qui animi molestias voluptate minima
					perspiciatis neque sint nobis omnis accusamus!
				</p>
				<h4>Description</h4>
				<p>
					Description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Aut hic at consequuntur aperiam natus eveniet est laboriosam
					exercitationem ea saepe, blanditiis nulla qui atque soluta provident
					ad eius recusandae eos?
				</p>
			</div>
		</div>
	);
}

export default TarotCard;
