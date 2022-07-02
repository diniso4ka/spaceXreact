import './null.css'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import React from 'react';


import Header from './components/Header';
import Content from './components/Content';
import Technologies from './components/Technologies';
import AboutMe from './components/AboutUs'
import Code from './components/Code';
import Contacts from './components/Contacts';



function App() {
  const [isActive, setIsActive] = React.useState('main')



  return (
    <div className="App">

      <div className='wrapper'>
        <div className='inner-wrapper'>
          <Header
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Routes>
            <Route path='/spaceXreact' element={<Content />} />
            <Route path='/technologies' element={< Technologies />} />
            <Route path='/aboutus' element={<AboutMe />} />
            <Route path='/code' element={<Code />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
