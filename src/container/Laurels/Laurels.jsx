import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.scss';

const Laurels = () => (
	<div className='app__bg app__wrapper section__padding' id='awards'>
		<div className="app__wrapper_info">
			<SubHeading title='Awards & recognition' />
			<h2 className='headtext__cormorant'>Our Laurels</h2>

			<div className="app__laurels_awards">
				{data.awards.map((award, i) => (
					<AwardCard award={award} key={award.title + i} />
				))}
			</div>
		</div>
		<div className="app__wrapper_img">
			<img src={images.laurels} alt="laurels" />
		</div>

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
