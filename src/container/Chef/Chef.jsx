import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Chef.scss';

const Chef = () => (
	<div className='app__bg app__wrapper section__padding'>

		<motion.div className="app__wrapper_img app__wrapper_img-reverse"
			whileInView={{ x: [-300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<img src={images.chef} alt="chef" />
		</motion.div>

		<motion.div className="app__wrapper_info"
			whileInView={{ x: [300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<SubHeading title='Chef’s Word' />
			<h2 className='headtext__cormorant'>What we believe in</h2>

			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote" />
					<p className="p__opensans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
					</p>
				</div>
				<p className="p__opensans">
					auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
				</p>
			</div>

			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className='p__opensans'>Chef & Founder</p>
				<img src={images.sign} alt="sign" />
			</div>
		</motion.div>

	</div>


);

export default Chef;
