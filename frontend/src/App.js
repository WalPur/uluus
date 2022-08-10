import "./App.css";
import './fonts/arciformsans.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	Detail,
} from "./pages";
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
				<Route path="/ad-detail/:id" element={<Detail/>}></Route>
			</Routes>
			<Footer />
		</BrowserRouter >
	);
}

export default App;
