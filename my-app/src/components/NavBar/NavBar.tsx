import Logo from "../images/logo2.png";
import LogoSmall from "../images/logosmall2.png";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<nav className='nav-bar'>
			<a href='#home'>
				<img
					src={Logo}
					alt='Órla Nugent logo'
					className='logo d-none d-md-block'
				/>
				<img
					src={LogoSmall}
					alt='Órla Nugent logo'
					className='logo-small d-block d-md-none'
				/>
			</a>
			<ul>
				<li>
					<a href='#home' className='links'>
						Home
					</a>
				</li>
				<li>
					<a href='#skills' className='links'>
						Skills
					</a>
				</li>
				<li>
					<a href='#contact' className='links'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};
