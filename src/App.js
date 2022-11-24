import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from "./Components/Services/Services";

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./Components/About/About";
import Counter from "./Components/About/Counter";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Pricing from "./Components/Pricing/Pricing";
import Auth from "./Components/Auth/Auth";
import WhyUs from './Components/Why Us/WhyUs';
import Footer from './Components/Footer/Footer';

function App() {
	
	const [open, setOpen] = React.useState(false);
	const [active, setActive] = React.useState("signin");


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
		    <Navbar modalSetOpen={setOpen} modalSetActive={setActive} />
		    <Home />
		    <Services />
		    <About />
		    <Counter />
		    <Pricing />
			<WhyUs />
			<Footer />
			<Auth open={open} setOpen={setOpen} active={active} setActive={setActive} />
		    <ScrollToTop />
	    </>
    );
}

export default App;
