import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './Gallery.scss';


const imagesArr = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	}

	return (
		<div className='app__gallery flex__center'>
			<motion.div className="app__gallery-content"
				whileInView={{ x: [-300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<SubHeading title='Instagram' />
				<h2 className='headtext__cormorant'>Photo Gallery</h2>
				<p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
				<button type='button' className='custom__button'>View More</button>
			</motion.div>

			<motion.div className="app__gallery-images"
				whileInView={{ x: [300, 0], opacity: [0, 1] }}
				transition={{ duration: 0.85, ease: 'easeOut' }}
			>
				<div className="app__gallery-images_container" ref={scrollRef}>
					{imagesArr.map((image, i) => (
						<div className="app__gallery-images_card flex__center" key={`gallery_image-${i + 1}`}>
							<img src={image} alt="gallery" />
							<BsInstagram className='app__gallery-images-icon' />
						</div>
					))}
				</div>
				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort className='app__gallery-images_arrows-icon'
						onClick={() => scroll('left')} />
					<BsArrowRightShort className='app__gallery-images_arrows-icon'
						onClick={() => scroll('right')} />
				</div>
			</motion.div>
		</div>
	);
}
export default Gallery;
