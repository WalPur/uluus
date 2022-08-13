import "./App.css";
import './fonts/arciformsans.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	Detail,
	AdPost,
	SetUluus,
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
				<Route path="/ad-detail/:id" element={<Detail />}></Route>
				<Route path="/ad-post" element={<AdPost />}></Route>
				<Route path="/set-uluus" element={<SetUluus />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter >
	);
}

export default App;
