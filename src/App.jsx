import React, { useState } from 'react';
import Cta from './components/Cta';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Input from './components/Input';

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [resultData, setResultData] = useState([]);

  const toggleDropdownMobile = () => {
    setShowDropdown(!showDropdown);
  };
  const getOutputResult = (result) => {
    setResultData(result);
  };

  return (
    <>
      <Header toggleDropdownMobile={toggleDropdownMobile} />
      <Hero showDropdown={showDropdown} />
      <Input getOutputResult={getOutputResult} />
      <Features resultData={resultData} />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
