import "./TechStack.css";
import skills from "./data.json";
export const TechStack = () => {
	return (
		<section>
			<div className='skills-container'>
				{skills.map((skill, id) => (
					<div key={id} className='logo-container'>
						<img src={skill.img} alt={skill.title} className='skill-logo' />
					</div>
				))}
			</div>
		</section>
	);
};
