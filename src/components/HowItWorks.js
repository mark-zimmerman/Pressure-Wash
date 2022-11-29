import React from 'react';
import { AiOutlineForm, AiOutlineSchedule } from 'react-icons/ai';
import {MdMarkEmailUnread, MdWaterDrop} from 'react-icons/md';
import {BiHappy} from 'react-icons/bi';
import satisfied from '../Satisfied.svg';


const HowItWorks = () => {
    return (
      <div className="how-it-works">
        <h1>How It Works</h1>
        <div className="col works-steps">
            <div className="works-step">
                <AiOutlineForm className="step-icon"/>
                <h3>1. Fill Out Form</h3>
                <p>Fill out our Free Online Quote form</p>
            </div>
            <div className="works-step">
                <MdMarkEmailUnread className="step-icon"/>
                <h3>2. We Send your Quote</h3>
                <p>After using our remote quoting software we will send a quote and access code via email.</p>
            </div>
            <div className="works-step">
                <AiOutlineSchedule className="step-icon"/>
                <h3>3. Schedule Online</h3>
                <p>Use your access code to sign in and schedule a cleaning</p>
            </div>
            <div className="works-step">
                <MdWaterDrop className="step-icon"/>
                <h3>4. Water Access</h3>
                <p>All we need from you is access to a water spicket</p>
            </div>
            <div className="works-step">
                <BiHappy className="step-icon"/>
                <h3>5. Enjoy!</h3>
                <p>Enjoy your sparkling home!</p>
            </div>
        </div>
        
        <div className="satisfaction">
            <div>
                <img className="satisfaction-svg" src={satisfied} alt="Satisfaction Guaranteed"/>
            </div>
            <div>
                <p>At Convene Clean we provide safe and effective cleaning service. You don't pay until you're happy with the job.</p>
            </div>
            

        </div>
      </div>
    );
  }
  
  export default HowItWorks;
  