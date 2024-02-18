import { useState } from "react";
import "./Carousel.css";

export const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const items = [
		{
			name: `Software Engineer`,
			img: "programmer.svg",
			review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		},
		{
			name: `Apprentice Software Engineer`,
			img: `certificate.svg`,
			review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		},
	];

	const previous = () =>
		setActiveIndex((activeIndex) =>
			activeIndex === 0 ? items.length - 1 : activeIndex - 1
		);
	const next = () =>
		setActiveIndex((activeIndex) =>
			activeIndex === items.length - 1 ? 0 : activeIndex + 1
		);

	return (
		<div className='carousel'>
			<div
				className='inner'
				style={{ transform: `translate(-${activeIndex * 100}%)` }}
			>
				{items.map((item) => (
					<div>
						<img src={item.img} alt='skill logo' className='skill-logo' />
						<div className='slider-text'>
							<p className='skill-title'>{item.name}</p>
							<p>{item.review}</p>
						</div>

						<button className='button-arrow' onClick={previous}>
							<span className='material-symbols-outlined'>chevron_left</span>
						</button>
						<button className='button-arrow' onClick={next}>
							<span className='material-symbols-outlined'>chevron_right</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
