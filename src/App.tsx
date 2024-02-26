import "./App.css";
import "./fonts/Montserrat/static/Montserrat-Medium.ttf";
import "./fonts/Montserrat/static/Montserrat-Bold.ttf";
import "./fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf";
import "./fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf";
import { NavBar } from "./components/NavBar/NavBar";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Contact } from "./components/Contact/Contact";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hero />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
