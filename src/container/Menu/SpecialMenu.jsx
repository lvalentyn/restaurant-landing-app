import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components'
import { motion } from 'framer-motion';
import './SpecialMenu.scss';

const SpecialMenu = () => (
	<div className="app__specialmenu flex__center section__padding" id="menu">
		<motion.div className="app__specialmenu-title"
			whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
			transition={{ duration: 0.85, ease: 'easeOut' }}
		>
			<SubHeading title='Menu that fits you palatte' />
			<h2 className='headtext__cormorant'>Today’s Special</h2>
		</motion.div>

		<div className="app__specialmenu-menu">
			<motion.div className="app__specialmenu-menu_wine flex__center"
				whileInView={{ x: [-300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<p className="app__specialmenu-menu_heading">Wine & beer</p>
				<div className="app__specialmenu-menu_items">
					{data.wines.map((wine, i) => (
						<MenuItem key={wine.title + i} title={wine.title} price={wine.price} tags={wine.tags} />
					))}
				</div>
			</motion.div>

			<motion.div className="app__specialmenu-menu_img"
				whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<img src={images.menu} alt="menu img" />
			</motion.div>

			<motion.div className="app__specialmenu-menu_cocktails flex__center"
				whileInView={{ x: [300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<p className="app__specialmenu-menu_heading">Cocktails</p>
				<div className="app__specialmenu-menu_items">
					{data.cocktails.map((cocktail, i) => (
						<MenuItem key={cocktail.title + i} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
					))}
				</div>
			</motion.div>
		</div>

		<div className="" style={{ marginTop: '15px' }}>
			<button className="custom__button" type="button">View More</button>
		</div>
	</div>
);

export default SpecialMenu;
