import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components'

import './SpecialMenu.scss';

const SpecialMenu = () => (
	<div className="app__specialmenu flex__center section__padding" id="menu">
		<div className="app__specialmenu-title">
			<SubHeading title='Menu that fits you palatte' />
			<h2 className='headtext__cormorant'>Today’s Special</h2>
		</div>

		<div className="app__specialmenu-menu">
			<div className="app__specialmenu-menu_wine flex__center">
				<p className="app__specialmenu-menu_heading">Wine & beer</p>
				<div className="app__specialmenu-menu_items">
					{data.wines.map((wine, i) => (
						<MenuItem key={wine.title + i} title={wine.title} price={wine.price} tags={wine.tags} />
					))}
				</div>
			</div>

			<div className="app__specialmenu-menu_img">
				<img src={images.menu} alt="menu img" />
			</div>

			<div className="app__specialmenu-menu_cocktails flex__center">
				<p className="app__specialmenu-menu_heading">Cocktails</p>
				<div className="app__specialmenu-menu_items">
					{data.cocktails.map((cocktail, i) => (
						<MenuItem key={cocktail.title + i} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
					))}
				</div>
			</div>
		</div>

		<div className="" style={{ marginTop: '15px' }}>
			<button className="custom__button" type="button">View More</button>
		</div>
	</div>
);

export default SpecialMenu;
