import {React, useRef} from 'react';
import axios from 'axios';

const QuoteForm = (props) => {
    const {
        firstName, 
        setFirstName, 
        lastName,
        setLastName, 
        email, 
        setEmail,
        phone, 
        setPhone, 
        concrete, 
        setConcrete, 
        house, 
        setHouse, 
        deck, 
        setDeck, 
        patio, 
        setPatio, 
        fence, 
        setFence, 
        additionalInfo, 
        setAdditionalInfo, 
        
    } = props;
    const ref = useRef([]);

    const resetState = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setConcrete(false);
        setHouse(false);
        setDeck(false);
        setPatio(false);
        setFence(false);
        setAdditionalInfo('');
        console.log('useRef checked?', ref.current.checked)
        for (let i = 0; i < ref.current.length; i++) {
            ref.current[i].checked = false;
        }
    }
    const addOrder = async (event) => {
        setTimeout(alert('Thank you for your feedback.'), 5000)
        try {
            const response = await axios.post(
            "/api/order/",
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                concrete: concrete,
                house: house,
                deck: deck,
                patio: patio,
                fence: fence,
                additionalInfo: additionalInfo,
            }
            );
            resetState();
            event.preventDefault();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e) => { 
        if (e.target.value === "concrete") {
            setConcrete(!concrete);
        } else if (e.target.value === "house") {
            setHouse(!house);
        } else if (e.target.value === "deck") {
            setDeck(!deck);
        } else if (e.target.value === "patio") {
            setPatio(!patio);
        } else if (e.target.value === "Fence") {
            setFence(!fence);
        } else if (e.target.name === "additional info") {
            setAdditionalInfo(e.target.value);
            console.log(additionalInfo)
        }
      }; 
    return (
      <div className="quote-form-container">
        <form className="quote-form" onSubmit={addOrder}> 
            <h1>Request a Free Quote</h1>
            <div className="form-row name-container">
                <div className="col">
                    <label>First Name</label>
                    <input type="text" required value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
                </div>
                <div className="col">
                    <label>Last Name</label>
                    <input type="text" required value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
                </div>
            </div>
            <div className="form-row contact-container">
                <div className="col">
                    <label>Email</label>
                    <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="col">
                    <label>Phone</label>
                    <input type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label>Street</label>
                    <input type="street" 
                        class="form-control" 
                        id="autocomplete" 
                        ></input>
                </div>
                <div className="col">
                    <label>City</label>
                    <input type="city" 
                    class="form-control" 
                    id="inputCity" 
                    >
                    </input>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label>State</label>
                    <input type="state" 
                    class="form-control" 
                    id="inputState" 
                     ></input>
                </div>
                <div className="col">
                    <label>Zip</label>
                    <input type="zip" 
                    class="form-control" 
                    id="inputZip" 
                   >
                    </input>
                </div>
            </div>
            <div className="column check-col">
                <div className="job-form-row checkbox-container">
                    <input type="checkbox" ref={(element) => { ref.current[0] = element }} value="concrete" onChange={(e) => handleChange(e)}></input>
                    <label>Concrete Wash and Seal</label>
                </div>
                <div className="job-form-row checkbox-container">
                    <input type="checkbox"  ref={(element) => { ref.current[1] = element }} value="house" onChange={(e) => handleChange(e)}></input>
                    <label>House Wash</label>
                </div>
                <div className="job-form-row checkbox-container">
                    <input type="checkbox" ref={(element) => { ref.current[2] = element }} value="deck" onChange={(e) => handleChange(e)}></input>
                    <label>Deck Wash</label>
                </div>
                <div className="job-form-row checkbox-container">
                    <input type="checkbox"  ref={(element) => { ref.current[3] = element }} value="patio" onChange={(e) => handleChange(e)}></input>
                    <label>Patio Wash</label>
                </div>
                <div className="job-form-row checkbox-container">
                    <input type="checkbox"  ref={(element) => { ref.current[4] = element }} value="fence" onChange={(e) => handleChange(e)}></input>
                    <label>Fence Wash</label>
                </div>
                <div className="col text-area">
                    <label className="text-center">Additional Information</label>
                    <textarea name="additional-info" onChange={(e)=> handleChange(e)}/> 
                </div>     
                <button className="quote-submit-btn" typeof="submit">Submit</button>
            </div>
            
        </form>
      </div>
    );
  }
  
  export default QuoteForm;
  
