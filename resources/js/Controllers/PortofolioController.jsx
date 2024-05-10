import "../bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";

// Importing Layouts
import MainLayouts from "../Layouts/MainLayouts";

// Importing Pages
import Portofolio from "../Pages/Portofolio"

ReactDOM.createRoot(document.getElementById("Portofolio")).render(
    <>
    <MainLayouts>
    <Portofolio />
    </MainLayouts>
  </>
);
