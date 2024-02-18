import "./Contact.css";
import daisy from "../images/daisy.png";

export const Contact = () => {
	return (
		<footer id='contact' className='footer'>
			<div>
				<h2 className='footer-text'>Contact Me</h2>
				<img src={daisy} alt='daisy' className='daisy' />
			</div>
			<ul>
				<li className='footer-links'>
					<a href='mailto:orlamnugent@gmail.com' aria-label='email icon'>
						<i className='fa-regular fa-envelope' />
					</a>
				</li>
				<li className='footer-links'>
					<a
						href='https://www.linkedin.com/in/orla-nugent/'
						aria-label='Linkedin icon as link to linkedin profile'
					>
						<i className='fa-brands fa-linkedin-in' />
					</a>
				</li>
				<li className='footer-links'>
					<a
						href='https://github.com/OrlaNugent'
						aria-label='github icon as link to github profile'
					>
						<i className='fa-brands fa-github' />
					</a>
				</li>
			</ul>
		</footer>
	);
};
