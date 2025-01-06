
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  const handleReturnClick = () => {
    setShowProductList(false);
  }

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Kumar's Plants</h1>
          <div className="divider"></div>
          <p>A Haven of Green and Peace</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Let's Find you a plant
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList toLanding={handleReturnClick} />
      </div>
    </div>
  );
}

export default App;


