import React from 'react';
import {TfiRulerPencil} from 'react-icons/tfi';
import {FaSprayCan} from 'react-icons/fa';
const Pricing = () => {
    return (
      <div className="col pricing">
        <h1>How we Price Our Cleaning</h1>
        {/* <p>The cost of pressure washing is dependent on several factors, such as the size of a property and the services being 
            performed. While some power washing companies choose to charge by the hour or even the dirtiness of your house, 
            it’s best to find a company that keeps pricing simple. Exact quotes and easy-to-understand invoices prevent 
            unexpected charges and ensure you get what you paid for. Perfect Power Wash is the home cleaning solution for you. 
            We base our prices on easy-to-understand square footage rates, and we’ll provide you with an itemized bill so you 
            know exactly where your money is going. Since our prices aren’t related to time, our technicians will work on your 
            home until it’s perfect and it will cost the same.</p> */}
        <div>
            <TfiRulerPencil className="step-icon"/>
            <h3>We Price by Square Foot</h3>
            <p>We price our jobs using our remote quoting software. Since we're a new company, we're able to offer the lowest prices in the area.</p>
        </div>
        <div>
            <FaSprayCan className="step-icon"/>
            <h3>Tough Stains</h3>
            <p>The great part about hiring a professional is we have the knowledge and resources to attack tough stains. We carry special chemicals for 
              all types of stains. These will normally be an extra charge to make up for cost of chemicals and extra time. 
            </p>
        </div>
      </div>

    );
  }
  export default Pricing;
  