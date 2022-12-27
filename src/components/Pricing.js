import React from 'react';
import {TfiRulerPencil} from 'react-icons/tfi';
import {FaSprayCan} from 'react-icons/fa';
const Pricing = () => {
    return (
      <div className="col pricing">
        <h1>How we Price Our Cleaning</h1>
        <div>
            <TfiRulerPencil className="step-icon"/>
            <h3>We Price by Square Foot</h3>
            <p>We price our jobs using our remote quoting software. Exact quotes and easy-to-understand invoices prevent 
            unexpected charges and ensure you get what you paid for. Since we're a new company, we're able to offer affordable prices, as well as take the time needed to clean every inch of the job.</p>
        </div>
        <div>
            <FaSprayCan className="step-icon"/>
            <h3>Tough Stains</h3>
            <p>The great part about hiring a professional is we have the knowledge and resources to attack tough stains. We carry special chemicals for 
              all types of stains. These will normally be an extra charge to account for cost of chemicals and extra time. 
            </p>
        </div>
      </div>

    );
  }
  export default Pricing;
  