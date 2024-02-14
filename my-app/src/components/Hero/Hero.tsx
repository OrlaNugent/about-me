import profile from "../images/profileimage.jpeg";
import "./Hero.css";
export const Hero = () => {
	return (
		<section className='hero'>
			<div className='content'>
				<h1 className='title'>Hi, I'm Órla</h1>
				<p className='description'>I'm a full stack software engineer. </p>
			</div>
			<img src={profile} alt='Órla profile' className='profile-image'></img>
		</section>
	);
};
