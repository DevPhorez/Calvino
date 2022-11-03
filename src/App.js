import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from "./Components/Services/Services";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	
	React.useEffect(() => {
		AOS.init(
			{
				delay: 300,
				once: true,
				easing: 'ease-in-sine',
			}
		);
	}, [])
	
    return (
	    <>
		    <Navbar />
		    <Home />
		    <Services />
	    </>
    );
}

export default App;
