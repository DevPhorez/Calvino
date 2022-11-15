import * as React from 'react'

import './ScrollToTop.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import Scroll from 'react-scroll'

function ScrollToTop () {
	
	const [isVisible, setIsVisible] = React.useState(false)
	
	const button = React.useRef()
	
	function ToggleVisible () {
		const scrolled = document.documentElement.scrollTop
		
		
		if (scrolled > 300) {
			setIsVisible(true)
			button.current.classList.add('scroll-to-top-animation')
			
		} else if (scrolled <= 300) {
			setIsVisible(false)
		}
	}
	
	window.addEventListener('scroll', ToggleVisible)
	
	const scroll = Scroll.animateScroll;
	
	function BackToTop () {
		scroll.scrollTo(0, 0)
	}
	
	
	
	return (
		<div ref={button} className={`button-parent scroll-to-top circle`} style={ { display: isVisible ? 'inline' : 'none' } }>
			<button className='button' onClick={ BackToTop }><a className='d-flex align-items-center justify-content-center'><FontAwesomeIcon fontSize={24} icon={faArrowUp} /></a></button>
		</div>
	)
}

export default ScrollToTop