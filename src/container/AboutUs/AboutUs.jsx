import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.scss';
import { images } from '../../constants'

const AboutUs = () => (
	<div className='app__aboutus app__bg flex__center section__padding' id='about'>
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="g letter" />
		</div>

		<div className="app__aboutus-content flex__center">
			<motion.div className="app__aboutus-content_about"
				whileInView={{ x: [-300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<h2 className="headtext__cormorant">About Us</h2>
				<img className="spoon__img" src={images.spoon} alt="spoon" />
				<p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
				<button className='custom__button' type='button'>Know More</button>
			</motion.div>

			<motion.div className="app__aboutus-content_knife flex__center"
				whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<img src={images.knife} alt="knife" />
			</motion.div>

			<motion.div className="app__aboutus-content_history"
				whileInView={{ x: [300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<h2 className="headtext__cormorant">Our History</h2>
				<img className="spoon__img" src={images.spoon} alt="spoon" />
				<p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
				<button className='custom__button' type='button'>Know More</button>
			</motion.div>
		</div>
	</div>
);

export default AboutUs;
