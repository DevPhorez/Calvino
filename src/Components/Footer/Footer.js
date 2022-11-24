import './Footer.css'

import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai'

function Footer () {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-8 mx-lg-0 mx-auto mb-lg-0 mb-5">
                        <a className='d-flex d-lg-block justify-content-center'>
                            <img src="/Images/logo.png" alt="calvino logo" />
                            <img className='ms-1' src="/Images/site name.png" alt="calvino" />
                        </a>
                        <p className='my-4 text-lg-start text-center'>
                            Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum
                        </p>
                        <div className="footer-social d-flex d-lg-block justify-content-center">
	                        <a href="">
		                        <AiOutlineInstagram className='me-2' color={'8252fa'} fontSize={22} />
	                        </a>
	                        <a href="">
		                        <AiOutlineFacebook className='me-2' color={'8252fa'} fontSize={22} />
	                        </a>
	                        <a href="">
		                        <AiOutlineLinkedin className='me-2' color={'8252fa'} fontSize={22} />
	                        </a>
	                        <a href="">
		                        <AiOutlineYoutube className='me-2' color={'8252fa'} fontSize={22} />
	                        </a>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 text-lg-start text-center d-md-block d-none">
	                    <ul className='list-unstyled footer-list'>
		                    <li className='header'>Navigation</li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Home
				                    <div></div>
			                    </button>
							</li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Services
				                    <div></div>
			                    </button>
		                    </li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    About
				                    <div></div>
			                    </button>
		                    </li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Pricing
				                    <div></div>
			                    </button>
		                    </li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Why Us
				                    <div></div>
			                    </button>
		                    </li>
	                    </ul>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-6 text-lg-start text-center">
	                    <ul className='list-unstyled footer-list'>
		                    <li className='header'>Services</li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Drone Mapping
				                    <div></div>
			                    </button>
		                    </li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Real State
				                    <div></div>
			                    </button>
		                    </li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Commercial
				                    <div></div>
			                    </button>
		                    </li>
		                    <li>
			                    <button className="linear-button position-relative">
				                    Construction
				                    <div></div>
			                    </button>
		                    </li>
	                    </ul>
                    </div>
	                <div className="col-xl-2 col-lg-2 col-md-3 text-lg-start text-center d-md-block d-none">
		                <ul className='list-unstyled footer-list'>
			                <li className='header'>Support</li>
			                <li>
				                <button className="linear-button position-relative">
					                Drone Mapping
					                <div></div>
				                </button>
			                </li>
			                <li>
				                <button className="linear-button position-relative">
					                Real State
					                <div></div>
				                </button>
			                </li>
			                <li>
				                <button className="linear-button position-relative">
					                Commercial
					                <div></div>
				                </button>
			                </li>
			                <li>
				                <button className="linear-button position-relative">
					                Construction
					                <div></div>
				                </button>
			                </li>
		                </ul>
	                </div>
	                <div className="col-xl-3 col-lg-2 col-md-3 col-6 text-lg-start text-center">
		                <ul className='list-unstyled footer-list'>
			                <li className='header'>Navigation</li>
			                <li>
				                <button className="linear-button position-relative">
					                Home
					                <div></div>
				                </button>
			                </li>
			                <li>
				                <button className="linear-button position-relative">
					                info@phorez.com
					                <div className='active'></div>
				                </button>
			                </li>
		                </ul>
		                <p className='h4 text-primary number'>
			                10 (87) 738-3940
		                </p>
	                </div>
	                
                </div>
            </div>
        </section>
    )
}

export default Footer