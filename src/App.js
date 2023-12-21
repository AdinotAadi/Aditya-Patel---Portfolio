import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Portfolio />
			<Skills />
		</div>
	);
}

export default App;
