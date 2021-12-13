import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [message, setMessage] = useState(null);

  const removeBodyClass = (bodyClass) => {
    document.body.classList.remove(bodyClass);
  }

  const toggleTheme = (themeColor)=> {
      setMode(themeColor);
      if (document.body.classList.value) {
        removeBodyClass(document.body.classList.value);
      }
      document.body.classList.add('bg-'+themeColor);
      showMessage(themeColor +' theme enabled!!');
  }

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 1500);
  }

  return (
    <>
      <Navbar mode={mode} toggleTheme={toggleTheme}/>
      <Alert message={message}/>
      <div className="container">
        <TextForm mode={mode} alertMessage={showMessage}/>
      </div>
    </>
  );
}

export default App;
