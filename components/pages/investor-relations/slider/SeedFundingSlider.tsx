import * as React from 'react';
import LazyLoad from 'react-lazyload';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide1_1 from '@public/slide1_1.jpg';
import slide1_2 from '@public/slide1_2.jpg';
import slide2_1 from '@public/slide2_1.jpg';
import slide2_2 from '@public/slide2_2.jpg';
import slide3_1 from '@public/slide3_1.jpg';
import slide3_2 from '@public/slide3_2.jpg';

interface ISeedFundingSliderProps {
}

const SeedFundingSlider: React.FunctionComponent<ISeedFundingSliderProps> = (props) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		// fade: true,
		autoplaySpeed: 2000,
		autoplay: true,
		arrows: false,
	};
	return (
		<Slider {...settings}>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" alt="contact fika" src={slide1_1.src} />
					</LazyLoad>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" alt="contact fika" src={slide1_2.src} />
					</LazyLoad>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" alt="contact fika" src={slide2_1.src} />
					</LazyLoad>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" alt="contact fika" src={slide2_2.src} />
					</LazyLoad>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" alt="contact fika" src={slide3_1.src} />
					</LazyLoad>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div style={{ position: "relative" }}>
					<LazyLoad throttle={100} height={100} once>
						<img width="100%" alt="contact fika" src={slide3_2.src} />
					</LazyLoad>
				</div>
			</React.Fragment>
		</Slider>
	);
};

export default SeedFundingSlider;
