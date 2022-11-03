import './Services.css'


function Services () {
	
	return (
		<section className='position-relative' style={ { paddingBottom: 120 } }>
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className='col-xl-5 col-md-10 col-lg-8 section-title'>
						<p className="text-primary">
							OUR SERVICES
						</p>
						<h2>
							Provide Awesome Service With Our Tools
						</h2>
					</div>
				</div>
				<div className="row">
					<div className='col-xl-3 col-lg-4 col-md-6 col-sm-6' data-aos='fade-right'>
						<div className="single-card">
							<h5 style={ { fontWeight: 700 } }>
								Discover, Explore the Product
							</h5>
							<div className='service-icon' style={ { width: 80, height: 80 } }>
								<img style={ { width: 45 } } src="/Images/services1.svg" alt="service 1"/>
							</div>
							<p>
								Effective strategies to help you reach customers.
							</p>
						</div>
					</div>
					<div className='col-xl-3 col-lg-4 col-md-6 col-sm-6' data-aos='fade-up'>
						<div className="single-card">
							<h5 style={ { fontWeight: 700 } }>
								Discover, Explore the Product
							</h5>
							<div className='service-icon' style={ { width: 80, height: 80 } }>
								<img style={ { width: 45 } } src="/Images/services2.svg" alt="service 1"/>
							</div>
							<p>
								Effective strategies to help you reach customers.
							</p>
						</div>
					</div>
					<div className='col-xl-3 col-lg-4 col-md-6 col-sm-6' data-aos='fade-up'>
						<div className="single-card">
							<h5 style={ { fontWeight: 700 } }>
								Discover, Explore the Product
							</h5>
							<div className='service-icon' style={ { width: 80, height: 80 } }>
								<img style={ { width: 45 } } src="/Images/services3.svg" alt="service 1"/>
							</div>
							<p>
								Effective strategies to help you reach customers.
							</p>
						</div>
					</div>
					<div className='col-xl-3 col-lg-4 col-md-6 col-sm-6' data-aos='fade-left'>
						<div className="single-card">
							<h5 style={ { fontWeight: 700 } }>
								Discover, Explore the Product
							</h5>
							<div className='service-icon' style={ { width: 80, height: 80 } }>
								<img style={ { width: 45 } } src="/Images/services3.svg" alt="service 1"/>
							</div>
							<p>
								Effective strategies to help you reach customers.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Todo fixed z-index shape 2 bug and add shape 2 */}
			{/*<div className="shape-1 d-none d-xl-block">*/}
			{/*</div>*/}
			{/*<div className="shape-2">*/}
			{/*	<img src="/Images/shape-2.webp" alt="shape 2" className=''/>*/}
			{/*</div>*/}
		</section>
	)
}

export default Services