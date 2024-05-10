import "../bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";

// Importing Layouts
import MainLayouts from "../Layouts/MainLayouts";

// Importing Pages
import Contact from "../Pages/Contact"

ReactDOM.createRoot(document.getElementById("Contact")).render(
    <>
    <MainLayouts>
    <Contact />
    </MainLayouts>
  </>
);
