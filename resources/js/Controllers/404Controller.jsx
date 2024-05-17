import '../bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Layouts
import MainLayouts from '../Layouts/MainLayouts';

// Importing Pages
import NotFound from '../Errors/404';

ReactDOM.createRoot(document.getElementById('404')).render(
  <>
    <MainLayouts>
      <NotFound />
    </MainLayouts>
  </>
);
