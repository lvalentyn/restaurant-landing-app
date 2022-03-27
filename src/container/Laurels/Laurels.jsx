import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.scss';
import { motion } from 'framer-motion';
const Laurels = () => (
	<div className='app__bg app__wrapper section__padding' id='awards'>
		<motion.div className="app__wrapper_info"
			whileInView={{ x: [-300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<SubHeading title='Awards & recognition' />
			<h2 className='headtext__cormorant'>Our Laurels</h2>

			<div className="app__laurels_awards">
				{data.awards.map((award, i) => (
					<AwardCard award={award} key={award.title + i} />
				))}
			</div>
		</motion.div>
		<motion.div className="app__wrapper_img"
			whileInView={{ x: [300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<img src={images.laurels} alt="laurels" />
		</motion.div>

	</div>
);

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
	return (
		<div className="app__laurels_awards-card">
			<img src={imgUrl} alt={title} />
			<div className="app__laurels_awards-card_content">
				<p className="p__cormorant" style={{ color: '#DCCA87' }}>{subtitle}</p>
				<p className="p__cormorant">{title}</p>
			</div>
		</div>
	);
}

export default Laurels;
