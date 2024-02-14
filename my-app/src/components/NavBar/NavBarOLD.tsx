import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<Navbar
			sticky='top'
			expand='lg'
			className='nav-bar'
			style={{ width: "100%" }}
		>
			<Navbar.Brand href='#home'>
				<img src={logo} alt='Órla Nugent logo' className='logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ms-auto'>
					<Nav.Link className='links' href='#home'>
						Home
					</Nav.Link>
					<Nav.Link className='links' href='/skills'>
						Skills
					</Nav.Link>
					<Nav.Link className='links' href='/contact'>
						Contact
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
