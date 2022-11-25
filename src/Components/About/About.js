import Button from "bootstrap/js/src/button";

function About () {
	return (
		<section className='position-relative' style={ { paddingBottom: 120 } }>
			<div className="container">
				<div className="row">
					<div className='order-1 offset-xxl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-9 section-title mb-0 text-md-start text-center' style={ { marginTop: '5rem' } }>
						<p className="text-primary">
							ABOUT US
						</p>
						<h2>
							We Create a Steps to Build a Successful Digital Product
						</h2>
						<p data-aos='fade-up'>
							With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.
							<br/>
							<br/>
							We’re out to create purposeful spaces that balance art and creativity with science and strategy.
						</p>
						<button className="linear-button pointer position-relative">
							Explore More
							<div></div>
						</button>
					</div>
					<div className='order-0 col-xxl-5 col-xl-6 col-lg-6 col-md-8' data-aos='fade-right'>
						<div className="about">
							<img className='w-100' src="/Images/about.webp" alt="about us"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About