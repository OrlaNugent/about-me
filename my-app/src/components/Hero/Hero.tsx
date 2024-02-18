import { About } from "./About/About";
import { Hello } from "./Hello/Hello";
import "./Hero.css";

export const Hero = () => {
	return (
		<section className='hero-container' id='home'>
			<Hello />
			<About />
		</section>
	);
};
