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
			<button>Get Cards</button>
			<section className="card-container">
				<div className="card" id="card-one">
					<picture>
						<img src="" alt="" />
						<button>Meaning</button>
					</picture>
				</div>
				<div className="card" id="card-two">
					<picture>
						<img src="" alt="" />
						<button>Meaning</button>
					</picture>
				</div>
				<div className="card" id="card-three">
					<picture>
						<img src="" alt="" />
						<button>Meaning</button>
					</picture>
				</div>
			</section>
		</div>
	);
}

export default HomePage