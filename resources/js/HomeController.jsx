import "./bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client";

// Importing Public Components
import Loader from "./Components/Public/Loader"
import Header from "./Components/Public/Header"
import Footer from "./Components/Public/Footer"
import Topend from "./Components/Public/Topend"
import Sidebar from "./Components/Public/Sidebar"
import Search from "./Components/Public/Search"

// Importing Pages
import Home from "./Pages/Home"
import NotFound from "./Pages/404"

ReactDOM.createRoot(document.getElementById("Home")).render(
    <>
    <Loader />
    <Header />
    <Topend />
    <Sidebar />
    <Search />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
