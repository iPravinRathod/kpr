import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import List from "./components/List/List";
// import BlogPosts from "./pages/BlogPosts/BlogPosts";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import MainContent from "./components/MainContent";
// import ToDoList from "./components/ToDoList/ToDoList";
// import Counter from "./pages/Counter/Counter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar/NavBar";
import BlogPosts from "./pages/BlogPosts/BlogPosts";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

function App() {
	return (
		<Router>
			{/* <Header /> */}
			{/* <h1>KPR</h1>
			<p>It is a brand</p> */}
			{/* <MainContent /> */}
			{/* <Counter /> */}
			{/* <ToDoList /> */}
			{/* <Footer company="www.kprgroup.com" /> */}
			{/* <BlogPosts /> */}
			{/* <List /> */}
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />

				{/* Parent route */}
				<Route path="/blogs" element={<BlogPosts />} />
				<Route path="/blogs/:id" element={<BlogDetails />} />

				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
