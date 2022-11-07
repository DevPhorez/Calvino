import './Home.css'
import '../Navbar/Navbar.css'

function Home () {
	return (
		<div className="container-fluid p-0 bg-home">
			<div className="row">
				<div className="col-6">
					<div className='our-business button-parent mx-auto'>
						<span className='text-primary'>Digital Marketing Expert</span>
						<h1 className='mb-3'>
							We bring you new customers
						</h1>
						<p>
							We build effective strategies to help you reach customers and prospects across the entire web.
						</p>
						<button className='button'>
							<a>Explore Services</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home