import React from 'react';

import Header from '../Components/Public/Header';
import Topend from '../Components/Public/Topend';
import Search from '../Components/Public/Search';
import Footer from '../Components/Public/Footer';

const HomeLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <Topend />
      <Search />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayouts;
