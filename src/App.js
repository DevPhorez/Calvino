import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from "./Components/Services/Services";

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./Components/About/About";
import Counter from "./Components/About/Counter";

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
		    <About />
		    <Counter />
	    </>
    );
}

export default App;
