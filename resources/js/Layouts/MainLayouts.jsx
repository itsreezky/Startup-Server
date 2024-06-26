import React from 'react';

import Loader from '../Components/Public/Loader';
import Header from '../Components/Public/Header';
import Topend from '../Components/Public/Topend';
import Search from '../Components/Public/Search';
import Footer from '../Components/Public/Footer';

const MainLayouts = ({ children }) => {
  return (
    <>
      <Loader />
      <Header />
      <Topend />
      <Search />
      {children}
      <Footer />
    </>
  );
};

export default MainLayouts;
