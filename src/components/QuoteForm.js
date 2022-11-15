import React from 'react';

const QuoteForm = () => {
    return (
      <div className="quote-form-container">
        <form className="quote-form"> 
            <legend>Name</legend>
            <div className="form-row">
                <div className="col">
                    <label>First</label>
                    <input type="text"></input>
                </div>
                <div className="col">
                    <label>Last</label>
                    <input type="text"></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div className="col">
                    <label>Phone</label>
                    <input type="tel"></input>
                </div>
            </div>
            <div className="column">
                <div className="form-row">
                    <input type="checkbox"></input>
                    <label>Concrete Wash and Seal</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"></input>
                    <label>House Wash</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"></input>
                    <label>Deck Wash</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"></input>
                    <label>Patio Wash</label>
                </div>
                <div className="form-row">
                    <input type="checkbox"></input>
                    <label>Fence Wash</label>
                </div>
                <div>
                    <textarea/> 
                </div>     
                <button>Submit</button>
            </div>
            
        </form>
      </div>
    );
  }
  
  export default QuoteForm;
  