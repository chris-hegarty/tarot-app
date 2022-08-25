import React from 'react'

function HomePage() {
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
					<button>Get Cards</button>
				</div>
				<p>Now, one by one, click to to reveal the card and its description.</p>
				<div className="three-card-container">
					<div className="card" id="card-one">
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
					<div className="card" id="card-two">
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
					<div className="card" id="card-three">
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
				</div>
			</section>
		</div>
	);
}

export default HomePage