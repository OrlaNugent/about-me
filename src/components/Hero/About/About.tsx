import "./About.css";
export const About = () => {
	return (
		<section className='about'>
			<div className='content-about'>
				<h1 className='title-about'>A little bit about me</h1>
				<p className='description-about'>
					I’m a full stack engineer based in Lodnon. Most recently working in
					Typescript within a full stack product team.
				</p>
				<p className='description-about'>
					I'm always eager to enhance my skill set completing courses in
					responsive design and an accessibility champion in my last role.
				</p>
				<p className='description-about'>
					Please{" "}
					<a href='#contact' className='get-in-touch'>
						get in touch
					</a>{" "}
					if you want to find out more 🪩✨
				</p>
			</div>
		</section>
	);
};
