import React from 'react';
import LazyLoad from 'react-lazyload';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const FikaContactSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplaySpeed: 2000,
		autoplay: true,
		arrows: false,
	};
	return (
		<Slider {...settings}>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" className="image" alt="contact fika" src={'/contact2.png'} />
					</LazyLoad>
				</div>
			</React.Fragment>
		</Slider>
	);
};

export default FikaContactSlider;