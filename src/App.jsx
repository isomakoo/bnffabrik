import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'flag-icon-css/css/flag-icons.min.css';
import 'aos/dist/aos.css'; 
import './App.css';
import Home from './Component/Home/Home';
import TelegramButton from './Component/telegram/telegram';
import Main from './Component/Main/Main';
import Bizhaqimizda from './Component/Bizhaqimizda/Bizhaqimizda';
import Contakt from './Component/Contakt/Contakt';
import Tuplam from './Component/tuplam/tuplam';
import { useTranslation } from 'react-i18next';
import AOS from 'aos'; 
import i18n from 'i18next'; 
function App() {
  const { t } = useTranslation();

  useEffect(() => {
 
    document.title = t('title'); 

    AOS.init({
      duration: 500, 
      offset: 120,
      once: true, 
    });

    console.log('Current language:', i18n.language);
    console.log('Document title:', t('title'));
  }, [t, i18n.language]); 

  return (
    <> 
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/product/:season/:id" element={<Main />} />
        <Route path='/shop' element={<Tuplam />} />
        <Route path="/about-us" element={<Bizhaqimizda />} /> 
        <Route path='/contact-us' element={<Contakt />} />
      </Routes>
      <TelegramButton />
    </>
  );
}

export default App;
