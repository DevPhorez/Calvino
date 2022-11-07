import './ScrollToTop.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import Scroll from 'react-scroll'

function ScrollToTop () {
	const  scroll = Scroll.animateScroll;
	
	function BackToTop () {
		scroll.scrollTo(0, 0)
	}
	
	
	
	return (
		<div className='button-parent scroll-to-top circle'>
			<button className='button' onClick={ BackToTop }><a className='d-flex align-items-center justify-content-center'><FontAwesomeIcon fontSize={24} icon={faArrowUp} /></a></button>
		</div>
	)
}

export default ScrollToTop