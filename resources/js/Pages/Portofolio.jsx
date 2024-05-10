import React from 'react';

// Import Components
import Portofolio_Breadcrumnd from '../Components/Portofolio/Portofolio_Breadcrumnd';
import Portofolio_Reezky from '../Components/Portofolio/Portofolio_Reezky';

const Portofolio = () => {
  return (
    <div>
      {/* Main start */}
      <main className="main">
        {/* Custom Line Shape */}
        <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
        {/* Custom Line Shape */}

        {/* Breadcrumnd */}
        <Portofolio_Breadcrumnd />
        {/* Portofolio */}
        <Portofolio_Reezky />

      </main>
    </div>
  );
};

export default Portofolio;
