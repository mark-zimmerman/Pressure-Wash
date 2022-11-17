import {React, useRef} from 'react';
import axios from 'axios';

const QuoteForm = (props) => {
    const {firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, concrete, setConcrete, house, setHouse, deck, setDeck, patio, setPatio, fence, setFence, additionalInfo, setAdditionalInfo} = props;
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
        event.preventDefault();
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
            <legend>Name</legend>
            <div className="form-row">
                <div className="col">
                    <label>First</label>
                    <input type="text" required value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
                </div>
                <div className="col">
                    <label>Last</label>
                    <input type="text" required value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label>Email</label>
                    <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="col">
                    <label>Phone</label>
                    <input type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                </div>
            </div>
            <div className="column">
                <div className="form-row">
                    <input type="checkbox" ref={(element) => { ref.current[0] = element }} value="concrete" onChange={(e) => handleChange(e)}></input>
                    <label>Concrete Wash and Seal</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"  ref={(element) => { ref.current[1] = element }} value="house" onChange={(e) => handleChange(e)}></input>
                    <label>House Wash</label>
                </div>
                <div className="form-row">
                    <input type="checkbox" ref={(element) => { ref.current[2] = element }} value="deck" onChange={(e) => handleChange(e)}></input>
                    <label>Deck Wash</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"  ref={(element) => { ref.current[3] = element }} value="patio" onChange={(e) => handleChange(e)}></input>
                    <label>Patio Wash</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"  ref={(element) => { ref.current[4] = element }} value="fence" onChange={(e) => handleChange(e)}></input>
                    <label>Fence Wash</label>
                </div>
                <div className="col">
                    <label>Additional Information</label>
                    <textarea name="additional info" onChange={(e)=> handleChange(e)}/> 
                </div>     
                <button typeof="submit">Submit</button>
            </div>
            
        </form>
      </div>
    );
  }
  
  export default QuoteForm;
  
