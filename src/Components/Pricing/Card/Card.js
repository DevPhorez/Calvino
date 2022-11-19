import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
	width: 285px;
	height: 500px;
	display: flex;
	flex-direction: column;
	color: #1d1f21;
	position: relative;
	cursor: grab;
	background: rgba(255, 255, 255, 0.001);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(5.1px);
	border: 1px solid rgba(255, 255, 255, 0.8);
`;

const TopContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 1.2;
	position: relative;
	align-items: center;
	padding: 1em 15px;
`;

function Card ({ icon, guid, title }) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);
	
	return (
		<CardWrapper className='pricing-card'>
			<CardContainer
				style={{ x, y, rotateX, rotateY, z: 100 }}
				drag
				dragElastic={0.16}
				dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
				whileTap={{ cursor: "grabbing" }}
			>
				<TopContainer>
					<div className="card-icon">
						<img className="m-auto" src={`/Images/${icon}`} alt={title}/>
					</div>
					<p>{guid}</p>
					<p className="plan-title text-primary">{title}</p>
					<div className="options">
						<p>2.5 GB Free Photos</p>
						<p>
							Secure Online Transfer Indeed
						</p>
						<p>
							Unlimited Styles for interface
						</p>
						<p>
							Reliable Customer Service
						</p>
						<p>
							Manual Backup Provided
						</p>
					</div>
					<button className="button" style={{ width: 150 }}><a>Get Started</a></button>
				</TopContainer>
			</CardContainer>
		</CardWrapper>
	);
}

export default Card