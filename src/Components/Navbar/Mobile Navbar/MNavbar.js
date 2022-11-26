import './MNavbar.css'

import * as React from "react";

import { Drawer } from "@mui/material";

import { IoMdClose } from 'react-icons/io'

function MNavbar ({ children }) {
	
	const [open, setOpen] = React.useState(false)
	
	function ToggleDrawer (action) {
		setOpen(action)
	}
	
	const button = React.useRef()
	
	return (
		<>
			<button ref={button} className="navbar-toggler" onClick={ (event) => {
				ToggleDrawer(true)
				button.current.blur()
			} }>
				<span className="navbar-toggler-icon"></span>
			</button>
			<Drawer
				anchor='top'
				open={open}
				onClose={ () => ToggleDrawer(false) }
				className='drawer position-relative d-lg-none d-block'
			>
				<div className="container my-3">
					
					<div className='d-flex justify-content-center'>
						<img src="/Images/logo.png" alt="logo"/>
						<img src="/Images/site name.png" alt="Calvino"/>
					</div>
					
					<IoMdClose fontSize={28} className='position-absolute top-0 end-0 m-4' onClick={ () => ToggleDrawer(false) } />
					
					<ul className="m-navbar mt-3">
						<li>
							<a className="nav-link" aria-current="page" href="#">Home</a>
						</li>
						<li>
							<a className="nav-link" aria-current="page" href="#">Services</a>
						</li>
						<li>
							<a className="nav-link" aria-current="page" href="#">About</a>
						</li>
						<li>
							<a className="nav-link" aria-current="page" href="#">Pricing</a>
						</li>
						<li>
							<a className="nav-link" aria-current="page" href="#">WhyUs</a>
						</li>
					</ul>
					
					{ children }
					
				</div>
			</Drawer>
		</>
	)
}

export default MNavbar