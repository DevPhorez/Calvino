import './Navbar.css'

function Navbar () {
	return (
		<nav className="navbar navbar-expand-lg bg-transparent px-4 py-3">
			<div className="container-fluid">
				<span className="navbar-brand pointer">
					<img src="/Images/logo.png" alt=""/>
					<img src="/Images/site name.png" alt=""/>
				</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				        aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav header-items me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Home</a>
							<div className='active'></div>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">About</a>
							<div></div>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Services</a>
							<div></div>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Case Study</a>
							<div></div>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Blog</a>
							<div></div>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Contact</a>
							<div></div>
						</li>
					</ul>
					<ul className="navbar-nav header-items me-auto mb-2 mb-lg-0">
						<li className="nav-item button me-1">
							<a className="nav-link" aria-current="page" href="#">Sign In</a>
						</li>
						<li className="nav-item button">
							<a className="nav-link" aria-current="page" href="#">Log In</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar