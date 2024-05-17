// Author: its Reezky
// Email: master@itsreezky.my.id
// LinkedIn: https://www.linkedin.com/in/itsreezky/
// Website: https://itsreezky.my.id
// Github: https://github.com/itsreezky
// Website Builder : React.js, Laravel, Vite, TailwindCSS, DaisyUI, Bootstrap, FontAwesome
// Comment Date: 10/05/2024 15:02:54

import React from 'react';

import Home_Hero from '../Components/Home/Home_Hero';

// About
import Home_SectionOneTextSlider from '../Components/Home/Home_SectioneOneTextSlider';
import Home_SectionOne from '../Components/Home/Home_SectionOne';

// Founder
import Home_FounderTextSlider from '../Components/Home/Home_FounderTextSlider';
import Home_Founder from '../Components/Home/Home_Founder';

// Portal
import Home_PortalTextSlider from '../Components/Home/Home_PortalTextSlider';
import Home_Portal from '../Components/Home/Home_Portal';

// Blog
import Home_BlogTextSlider from '../Components/Home/Home_BlogTextSlider';
import Home_Blog from '../Components/Home/Home_Blog';

const Home = () => {
  return (
    <div>
      {/* Main start */}
      <main className="main position-relative overflow-hidden" id="mains">
        {/* Custom Line Shape */}
        <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
        {/* Custom Line Shape */}

        <Home_Hero />
        {/* About */}
        <Home_SectionOneTextSlider />
        <Home_SectionOne />
        {/* Founder */}
        <Home_FounderTextSlider />
        <Home_Founder />
        {/* Portal */}
        <Home_PortalTextSlider />
        <Home_Portal />
        {/* Blog */}
        <Home_BlogTextSlider />
        <Home_Blog />
      </main>
    </div>
  );
};

export default Home;
