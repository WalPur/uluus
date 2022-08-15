import "./App.css";
import './fonts/arciformsans.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

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
	const uluus = useSelector(state => state.uluus.value);
	return (
		<BrowserRouter>
			<Header uluus={uluus} />
			<Routes>
				<Route path="" element={<Home />}></Route>
				<Route path="/ad-detail/rent/:id" element={<Detail />}></Route>
				<Route path="/ad-detail/car/:id" element={<Detail />}></Route>
				<Route path="/ad-detail/service/:id" element={<Detail />}></Route>
				<Route path="/ad-detail/home/:id" element={<Detail />}></Route>
				<Route path="/ad-detail/food/:id" element={<Detail />}></Route>
				<Route path="/ad-detail/jobs/:id" element={<Detail />}></Route>
				<Route path="/ad-post" element={<AdPost />}></Route>
				<Route path="/set-uluus" element={<SetUluus />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter >
	);
}

export default App;
