import profile from "../../images/profileimage.jpeg";
import "./Hello.css";
export const Hello = () => {
	return (
		<section className='hello '>
			<img src={profile} alt='Órla profile' className='profile-image'></img>
			<div className='content glitter'>
				<h1 className='title '>Hi, I'm Órla</h1>
			</div>
		</section>
	);
};
