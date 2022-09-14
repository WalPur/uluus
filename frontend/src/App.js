import "./App.css";
import "./fonts/arciformsans.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cookies from "js-cookie";

import {
  Home,
  Detail,
  AdPost,
  Contacts,
  PrivacyPolicy,
  AdvertsRules,
  FirstEntry,
  // SetUluus,
} from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <BrowserRouter>
        {Cookies.get("isFirstEntry") !== "false" ? <></> : <Header />}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                Cookies.get("isFirstEntry") !== "false" ? (
                  <FirstEntry />
                ) : (
                  <Home />
                )
              }
            ></Route>
            {/* <Route path="/home" element={<Home />}></Route> */}
            <Route
              path="/ad-detail/rent/:id"
              element={<Detail category="rent" />}
            ></Route>
            <Route
              path="/ad-detail/car/:id"
              element={<Detail category="car" />}
            ></Route>
            <Route
              path="/ad-detail/service/:id"
              element={<Detail category="service" />}
            ></Route>
            <Route
              path="/ad-detail/home/:id"
              element={<Detail category="home" />}
            ></Route>
            <Route
              path="/ad-detail/food/:id"
              element={<Detail category="food" />}
            ></Route>
            <Route
              path="/ad-detail/jobs/:id"
              element={<Detail category="jobs" />}
            ></Route>
            <Route
              path="/ad-detail/remont/:id"
              element={<Detail category="remont" />}
            ></Route>
            <Route path="/ad-post" element={<AdPost />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/adverts-rules" element={<AdvertsRules />}></Route>
            {/* <Route path="/set-uluus" element={<SetUluus />}></Route> */}
          </Routes>
        </div>
        {Cookies.get("isFirstEntry") !== "false" ? <></> : <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
