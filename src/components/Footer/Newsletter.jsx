import React from 'react';
import { SubHeading } from '../../components';

import './Newsletter.scss';

const Newsletter = () => (
	<div className="app__newsletter">
		<div className="app__newsletter-heading">
			<SubHeading title='Newsletter' />
			<h2 className='headtext__cormorant'>Subscribe to Our Newsletter</h2>
			<p className="p__opensans">And never miss latest Updates!</p>
		</div>
		<div className="app__newsletter-input flex__center">
			<input type="email" placeholder='Enter Your Email Address' />
			<button className='custom__button'>Subscribe</button>
		</div>
	</div>
);

export default Newsletter;
