import React from 'react';

const Services = () => {
    return (
      <div className="services-container">
        <h1 className="services">Services We Provide</h1>
        <div className="services">
            <div className="services-grid-item" id="driveway">
                <div className="service-description">
                    <h4>Concrete Clean and Seal</h4>
                </div>
            </div>
            <div className="services-grid-item" id="house">
                <div className="service-description">
                    <h4>House Wash</h4>
                </div>
            </div>
            <div className="services-grid-item" id="deck">
                <div className="service-description">
                    <h4>Deck and Patio Cleaning</h4>
                </div>
            </div>
            <div className="services-grid-item" id="rust">
                <div className="service-description">
                    <h4>Rust Stain Removal</h4>
                </div>
            </div>
            <div className="services-grid-item" id="paint">
                <div className="service-description">
                    <h4>Graffiti Removal</h4>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Services;