// Author: its Reezky
// Email: master@itsreezky.my.id
// LinkedIn: https://www.linkedin.com/in/itsreezky/
// Website: https://itsreezky.my.id
// Github: https://github.com/itsreezky
// Website Builder : React.js, Laravel, Vite, TailwindCSS, DaisyUI, Bootstrap, FontAwesome
// Comment Date: 10/05/2024 23:17:50

import React from 'react';

// Import Components
import Contact_Breadcrumnd from '../Components/Contact/Contact_Breadcrumnd';
import Contact_Reezky from '../Components/Contact/Contact_Reezky';

const Portofolio = () => {
  return (
    <div>
      {/* Main start */}
      <main className="main">
        {/* Custom Line Shape */}
        <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
        {/* Custom Line Shape */}

        {/* Breadcrumnd */}
        <Contact_Breadcrumnd />
        {/* Contact */}
        <Contact_Reezky />
      </main>
    </div>
  );
};

export default Portofolio;
