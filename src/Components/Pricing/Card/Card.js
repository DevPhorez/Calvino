import React from "react";


function Card ({ icon, guid, title }) {
	return (
		<div className='card-wrapper pricing-card'>
			<div className='card-container'>
				<div className='top-container'>
					<div className="card-icon">
						<img className="m-auto" src={`/Images/${icon}`} alt={title}/>
					</div>
					<p>{guid}</p>
					<p className="plan-title text-primary">{title}</p>
					<div className="options">
						<p>2.5 GB Free Photos</p>
						<p>
							Secure Online Transfer Indeed
						</p>
						<p>
							Unlimited Styles for interface
						</p>
						<p>
							Reliable Customer Service
						</p>
						<p>
							Manual Backup Provided
						</p>
					</div>
					<button className="button" style={{ width: 150 }}><a>Get Started</a></button>
				</div>
			</div>
		</div>
	);
}

export default Card