import React from 'react'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './Pricing.css'
import Card from "./Card/Card";

function Pricing () {
	
	const [width, setWidth] = React.useState(window.innerWidth - 20)
	const [height, setHeight] = React.useState(0)
	
	const pricing = React.useRef(null)
	
	React.useEffect(() => {
		setHeight(pricing.current.clientHeight)
	})
	
	function ChangeHeight () {
		console.log(pricing.current.style.height)
	}
	
	const particlesInit = async (main) => {
		await loadFull(main);
	};
	
	const config = {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 700
				}
			},
			"color": {
				"value": "#000000"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 200,
				"color": "#434343",
				"opacity": 0.1,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		style: {
			width: `${width}px`,
			height: `${height}px`,
			position: 'absolute',
		}
	}
	
	window.addEventListener('resize', () => {
		setWidth(window.innerWidth - 20)
		ChangeHeight()
	})
	
	return (
		<section ref={pricing} className="Pricing" style={ { paddingTop: '6rem', background: '#f2f2f2' } }>
			<Particles
				className='pricing-particle'
				id="pricing-particle"
				init={particlesInit}
				
				options={config}
			/>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 mb-5">
						<Card icon={'basic.svg'} title={'Basic'} guid={'For The Individuals'} />
					</div>
					<div className="col-12 col-lg-4 mb-5">
						<Card icon={'normal.svg'} title={'Normal'} guid={'For Small Company'} />
					</div>
					<div className="col-12 col-lg-4 mb-5">
						<Card icon={'Pro.svg'} title={'Pro'} guid={'For Large Company'} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Pricing