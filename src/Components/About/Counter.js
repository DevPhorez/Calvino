import CountUp from 'react-countup';


function Counter () {
	return (
		<div style={ { backgroundImage: '/Images/circle-bg.webp' } }>
			<div className="container mb-5 pb-5">
				<div className="row">
					<div className="col-12 col-md-4 text-center mb-4" data-aos='fade-up'>
						<div className="glass-parent">
							<div className='position-absolute rounded-circle' style={ { height: 85, width: 85, backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 75, width: 75, left: '30%', top: '35%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 40, width: 40, left: '85%', top: '35%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 75, width: 75, left: '70%', top: '80%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-1' style={ { height: 90, width: 90, left: '15%', top: '70%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							
							<div className="glass pb-3">
								<div className="d-flex justify-content-center">
									<img className='w-50' src="/Images/Website Design.svg" alt="Website Design"/>
								</div>
								<p className="h3 text-primary" style={ { fontWeight: 600 } }><CountUp enableScrollSpy={true} end={1369} duration={3} /></p>
								<p className='mb-0'>Website Design</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 text-center mb-4" data-aos='fade-up' data-aos-delay={600}>
						<div className="glass-parent">
							<div className='position-absolute rounded-circle' style={ { height: 85, width: 85, left: '80%', top: '40%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 75, width: 75, left: '50%', top: '15%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 40, width: 40, left: '15%', top: '75%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 60, width: 85, left: '10%', top: '35%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 75, width: 75, left: '70%', top: '80%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-1' style={ { height: 90, width: 90, left: '80%', top: 0, backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							
							<div className="glass pb-3">
								<div className="d-flex justify-content-center">
									<img className='w-50' src="/Images/Graphic Design.svg" alt="Graphic Design"/>
								</div>
								<p className="h3 text-primary" style={ { fontWeight: 600 } }><CountUp enableScrollSpy={true} end={2090} duration={3} /></p>
								<p className='mb-0'>Graphic Design</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 text-center" data-aos='fade-up' data-aos-delay={800}>
						<div className="glass-parent">
							<div className='position-absolute rounded-circle' style={ { height: 100, width: 100, left: '40%', top: '65    %', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 75, width: 75, left: '50%', top: '15%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 40, width: 40, left: '15%', top: '75%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 60, width: 85, left: '30%', top: '35%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							<div className='position-absolute rounded-circle' style={ { height: 65, width: 65, left: 0, top: '20%', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
							} }></div>
							
							<div className="glass pb-3">
								<div className="d-flex justify-content-center">
									<img className='w-50' src="/Images/SEO.svg" alt="SEO"/>
								</div>
								<p className="h3 text-primary" style={ { fontWeight: 600 } }><CountUp enableScrollSpy={true} end={3685} duration={3} /></p>
								<p className='mb-0'>Website SEO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Counter