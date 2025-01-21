import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent";
import Counter from "./pages/Counter/Counter";

function App() {
	return (
		<>
			<Header />
			<h1>KPR</h1>
			<p>It is a brand</p>
			<MainContent />
			<Counter />
			<Footer company="www.kprgroup.com" />
		</>
	);
}

export default App;
