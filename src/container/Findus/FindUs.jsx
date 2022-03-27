import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';
const FindUs = () => (
	<div className="app__bg app__wrapper section__padding" id="contact">
		<motion.div className="app__wrapper_info"
			whileInView={{ x: [-300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<SubHeading title="Contact" />
			<h2 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h2>
			<div className="app__Wrapper-content">
				<p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
				<p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
				<p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
				<p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
			</div>
			<button className="custom__button" type="button" style={{ marginTop: '2rem' }}>Visit Us</button>
		</motion.div>

		<motion.div className="app__wrapper_img"
			whileInView={{ x: [300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<img src={images.findus} alt="findus" />
		</motion.div>
	</div>
);

export default FindUs;
