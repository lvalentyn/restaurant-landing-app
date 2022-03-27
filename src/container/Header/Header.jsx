import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
	return (
		<div className="app__header app__wrapper section__padding" id="home">
			<motion.div className="app__wrapper_info"
				whileInView={{ x: [-300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<SubHeading title='Chase the new flavour' />
				<h1 className="app__header-h1">The Key to Fine Dining</h1>
				<p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
				<button className='custom__button' type="button">Explore Menu</button>
			</motion.div>
			<motion.div className="app__wrapper_img"
				whileInView={{ x: [300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<img src={images.welcome} alt="header img" />
			</motion.div>
		</div>
	);
}


export default Header;
