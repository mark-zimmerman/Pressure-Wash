import React from 'react';
import { GiSoap, GiSparkles } from "react-icons/gi";
import { FaWater } from 'react-icons/fa';
const Concrete = () => {
    return (
     <>
        
        <div className="concrete-steps col">
            <h1> Our safe and effective concrete cleaning process. </h1>
            <div className="concrete-step col">

                <GiSoap className="step-icon"/>
                <h3>Cleanser</h3>
                <p>We apply an environmentally-safe, biodegradable cleanser to release trapped dirt and debris, and to gently lift scuffs and marks.</p>
            </div>
            <div className="concrete-step col">
        
                <FaWater className="step-icon"/>
                <h3>Power Wash</h3>
                <p>We deep clean the concrete with a powerful but safe walk-behind power washer to remove contaminants embedded in the substrate.</p>
            </div>
            <div className="concrete-step col">

                <GiSparkles className="step-icon"/>
                <h3>Sealant</h3>
                <p>We apply our deep-penetrating, siloxane-based concrete sealant to protect the concrete from within and preserve its longevity.</p>
            </div>
        </div>
        </>   
    );
  }
  
  export default Concrete;