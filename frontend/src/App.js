import "./App.css";
import './fonts/arciformsans.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import {
	Header,
	Footer,
} from "./components";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="" element={<Home />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
