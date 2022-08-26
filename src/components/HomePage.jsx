import React, { useState, useContext } from "react";
import useAxios from "../hooks/useAxios";
import { TarotCardContext } from "../context/TarotCardContext";
import TarotCard from "./TarotCard"

//!Data needs to come in here via props.
//!Which can be a destructured object.

function HomePage(props) {
	const [show, setShow] = useState(false);
	const [url, setUrl] = useState("");
	const { data: cards, error } = useAxios(url);
	const { revealCard, setRevealCard } = useContext(TarotCardContext);

	return (
		<div>
			<h3>Getting Started</h3>
			<p>
				Use this three card spread to think about a path, or sequence of events,
				such as:
			</p>
			<ul>
				<li>Past | Present | Future</li>
				<li>A Situation | An Action | An Outcome</li>
				<li>Option 1 | Option 2 | Advice/Direction</li>
			</ul>
			<p>When you are ready, click below to get three cards.</p>
			<section className="card-section">
				<div className="button-container">
					<button
						onClick={(e) => {
							e.preventDefault();
							setShow(true);
							setUrl(`/random/?n=3`);
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
								meaning_up={c.meaning_up}
								desc={c.desc}
							/>
						))}
				</div>

				{/* <div className="card flex" id="card-one">
						<div className="section-left card-image">
							<button>
								<picture>
									<img
										src="../../images/cards/tarot-back-527.jpg"
										alt="Tarot card face down."
										height="400px"
									/>
								</picture>
							</button>
						</div>
						<div className="section-right card-meaning">
							<h3>Title of Card</h3>
							<div className="card-suit-and-type">
								<p>Suit: xxxxxx</p>
								<p>Type: xxxxxx</p>
							</div>
							<h4>Meaning</h4>
							<p>
								Could be multiple lines of text. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quam iure consectetur ducimus
								eaque? Non a natus eius voluptate. Esse qui animi molestias
								voluptate minima perspiciatis neque sint nobis omnis accusamus!
							</p>
							<h4>Meaning reverse placeholder.</h4>
							<p>
								Could be multiple lines of text. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quam iure consectetur ducimus
								eaque? Non a natus eius voluptate. Esse qui animi molestias
								voluptate minima perspiciatis neque sint nobis omnis accusamus!
							</p>
							<h4>Description</h4>
							<p>
								Description. Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Aut hic at consequuntur aperiam natus eveniet est
								laboriosam exercitationem ea saepe, blanditiis nulla qui atque
								soluta provident ad eius recusandae eos?
							</p>
						</div>
					</div>
					
				</div> */}
			</section>
		</div>
	);
}

export default HomePage;
