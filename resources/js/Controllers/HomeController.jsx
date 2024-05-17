import '../bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Layouts
import HomeLayouts from '../Layouts/HomeLayouts';

// Importing Pages
import Home from '../Pages/Home';

ReactDOM.createRoot(document.getElementById('Home')).render(
  <>
    <HomeLayouts>
      <Home />
    </HomeLayouts>
  </>
);
