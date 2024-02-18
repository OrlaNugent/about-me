import "./Skills.css";
import { TechStack } from "./TechStack/TechStack";
export const Skills = () => {
	const items = [
		{
			name: `Software Engineer`,
			year: "Nov 22 -",
			company: "Zoa",
			img: "images/programmer.svg",
			review: `I worked in a full stack product team delivering web-based customer service tools.`,
		},
		{
			name: `Apprentice Software Engineer`,
			company: "Bulb",
			year: "Sept 21 - Nov 22",
			img: `images/certificate.svg`,
			review: `I worked in a backend Python team. Automating processes for industry operations team.`,
		},
	];

	return (
		<section className='skills' id='skills'>
			<h1 className='title-skills'>Skills and Experience</h1>
			<div className='skills-experience'>
				<div className='experience'>
					{items.map((item, id) => (
						<div className='experience-card' key={id}>
							<img src={item.img} alt={item.name} className='experience-logo' />
							<div className='experience-text'>
								<p className='experience-title'>{item.name}</p>
								<p>
									{item.company} {item.year}
								</p>
								<p>{item.review}</p>
							</div>
						</div>
					))}
				</div>
				<TechStack />
			</div>
		</section>
	);
};
