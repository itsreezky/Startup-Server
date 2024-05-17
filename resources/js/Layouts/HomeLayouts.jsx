import React from 'react';

import Header from '../Components/Public/Header';
import Topend from '../Components/Public/Topend';
import Sidebar from '../Components/Public/Sidebar';
import Search from '../Components/Public/Search';
import Footer from '../Components/Public/Footer';

const HomeLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <Topend />
      <Sidebar />
      <Search />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayouts;
