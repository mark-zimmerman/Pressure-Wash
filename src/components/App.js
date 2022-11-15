import React from 'react';
import '../App.css';
import {Navbar, Banner, Services, Concrete, QuoteForm} from './index';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Banner from './banner';
const App = () => {
  return (
    <div className="App col">
      <BrowserRouter>
        <Navbar/>
        <div className="promo">
          <h4>First 20 customers for 50% off in Spring</h4>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner/>
                <Concrete/>
                <QuoteForm/>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <Services/>
            }
          />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
