import {React, useState} from 'react';
import '../App.css';
import {Navbar, Banner, Services, Concrete, QuoteForm, SmallScreenMenu, HowItWorks} from './index';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Banner from './banner';
const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [concrete, setConcrete] = useState(false);
  const [house, setHouse] = useState(false);
  const [deck, setDeck] = useState(false);
  const [patio, setPatio] = useState(false);
  const [fence, setFence] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App col">
      <BrowserRouter>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="promo">
          <h4>First 20 customers for 50% off in Spring</h4>
        </div>
        { menuOpen ?
                  <>
                    <SmallScreenMenu/>
                  </>
                  : null
                }
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner/>
                <Concrete/>
                <QuoteForm 
                  firstName={firstName} 
                  setFirstName={setFirstName} 
                  lastName={lastName} 
                  setLastName={setLastName} 
                  email={email} 
                  setEmail={setEmail} 
                  phone={phone}
                  setPhone={setPhone}
                  concrete={concrete}
                  setConcrete={setConcrete}
                  house={house}
                  setHouse={setHouse}
                  deck={deck}
                  setDeck={setDeck}
                  patio={patio}
                  setPatio={setPatio}
                  fence={fence}
                  setFence={setFence}
                  additionalInfo={additionalInfo}
                  setAdditionalInfo={setAdditionalInfo}
                  
                />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <Services/>
            }
          />
          <Route
            path="/howitworks"
            element={
              <HowItWorks/>
            }
          />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
