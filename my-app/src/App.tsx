import "./App.css";
import "./fonts/Montserrat/static/Montserrat-Medium.ttf";
import "./fonts/Montserrat/static/Montserrat-Bold.ttf";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hero />
		</div>
	);
}

export default App;
