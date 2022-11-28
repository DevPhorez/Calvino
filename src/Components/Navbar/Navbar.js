import './Navbar.css'
import * as React from "react";
import MNavbar from "./Mobile Navbar/MNavbar";

import Scroll from 'react-scroll'

function Navbar({ modalSetOpen, modalSetActive }) {
	
	// true means navbar has background color
	const [status, setStatus] = React.useState(false)
	
	//modal 
	const handleOpen = () => modalSetOpen(true);


	const navbar = React.useRef()
	
	function ToggleStatus () {
		const scrolled = document.documentElement.scrollTop
		
		
		if (scrolled > 500) {
			setStatus(true)
			navbar.current.classList.add('fixed-top')
			navbar.current.classList.add('navbar-animation')
			
		} else if (scrolled <= 500) {
			setStatus(false)
		}
	}
	
	window.addEventListener('scroll', ToggleStatus)
	
	const [activeNavItem, setActiveNavItem] = React.useState({
		home: true,
		services: false,
		about: false,
		pricing: false,
		whyUs: false,
	})
	
	const scroll = Scroll.animateScroll;
	
	function ScrollTo (top) {
		scroll.scrollTo(top, 0)
	}
	
	function ChangeActive (disableItem, activeItem) {
		
		
		setActiveNavItem(prevState => {
			return (
				prevState[disableItem] = false
			)
		})
		
		setActiveNavItem(prevState => {
			return (
				prevState[activeItem] = true
			)
		})
	}
	
	return (
		<nav ref={navbar} className={`${ !status ? 'position-absolute w-100 bg-transparent' : 'shadow' } navbar navbar-expand-lg px-4 py-3`}>
			<div className="container-fluid">
				<span className="navbar-brand pointer">
					<img src="/Images/logo.png" alt="logo"/>
					<img src="/Images/site name.png" alt="Calvino"/>
				</span>
				
				<MNavbar ScrollToHandler={ScrollTo}>
					<div className="d-grid g-3">
						<button className='button' onClick={() => { handleOpen(); modalSetActive('signup') }}>
							<a>Sign Up</a>
						</button>
						<button className='button mt-2' onClick={() => { handleOpen(); modalSetActive('signup') }}>
							<a>Sign In</a>
						</button>
					</div>
				</MNavbar>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav header-items me-auto mb-2 mb-lg-0">
						<li className="nav-item" onClick={ (event) => {
							ScrollTo(0)
						} }>
							<a className="nav-link" aria-current="page" href="#">Home</a>
							<div className={` ${ activeNavItem.home && 'active' } ${ status && 'mb--25' }`}></div>
						</li>
						<li className="nav-item" onClick={ () => ScrollTo(617) }>
							<a className="nav-link" aria-current="page" href="#">Services</a>
							<div className={` ${ activeNavItem.services && 'active' } ${ status && 'mb--25' }`}></div>
						</li>
						<li className="nav-item" onClick={ () => ScrollTo(1287) }>
							<a className="nav-link" aria-current="page" href="#">About</a>
							<div className={` ${ activeNavItem.about && 'active' } ${ status && 'mb--25' }`}></div>
						</li>
						<li className="nav-item" onClick={ () => ScrollTo(2387) }>
							<a className="nav-link" aria-current="page" href="#">Pricing</a>
							<div className={` ${ activeNavItem.pricing && 'active' } ${ status && 'mb--25' }`}></div>
						</li>
						<li className="nav-item" onClick={ () => ScrollTo(3037) }>
							<a className="nav-link" aria-current="page" href="#">WhyUs</a>
							<div className={` ${ activeNavItem.whyUs && 'active' } ${ status && 'mb--25' }`}></div>
						</li>
					</ul>
					<ul className="navbar-nav header-items me-auto mb-2 mb-lg-0">
						<li className="nav-item button me-1" onClick={() => { handleOpen(); modalSetActive('signup') }}>
							<a className="nav-link" aria-current="page" href="#">Sign Up</a>
						</li>
						<li className="nav-item button" onClick={() => { handleOpen(); modalSetActive('signin') } }>
							<a className="nav-link" aria-current="page" href="#">Sign In</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar