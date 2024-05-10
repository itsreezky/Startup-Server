import "../bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";

// Importing Layouts
import MainLayouts from "../Layouts/MainLayouts";

// Importing Pages
import Home from "../Pages/Home"

ReactDOM.createRoot(document.getElementById("Home")).render(
    <>
    <MainLayouts>
    <Home />
    </MainLayouts>
  </>
);
