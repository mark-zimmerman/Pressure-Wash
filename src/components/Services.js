import React from 'react';

const Services = () => {
    return (
      <div className="services-container">
        <h1 className="services">Services We Provide</h1>
        <div className="service-container">
            <div className="services-grid-item" id="driveway">
                <div className="service-description">
                    <h4>Concrete Clean and Seal</h4>
                </div>
            </div>
            <div className="service-info">
                <ul>
                    <li><h4>1. Cleanser</h4><p>We apply an environmentally-safe, biodegradable cleanser to release trapped dirt and debris, and to gently lift scuffs and marks.</p></li>
                    <li><h4>2. Pressure Wash</h4><p>We deep clean the concrete with a powerful but safe walk-behind power washer to remove contaminants embedded in the substrate.</p> </li>
                    <li><h4>3. Sealant</h4><p>We apply our deep-penetrating, siloxane-based concrete sealant to protect the concrete from within and preserve its longevity.</p></li>
                </ul>
                <button>Request a Quote</button>
            </div>
        </div>
        <div className="service-container">
            <div className="services-grid-item" id="house">
                <div className="service-description">
                    <h4>House Wash</h4>
                </div>
            </div>
            <div className="service-info">
                <p>Our low-pressure “soft-washing” method is utilized to clean your home while keeping the surface material safe in the process. Our cleaning methods and detergents will effectively restore stucco, brick, hardiplank, vinyl, aluminum, and more back to its original beauty! The specific detergents and surfactants that we use create the right blend of chemicals will dig deep into the filth and grime that exist on your home’s exterior and then be easily rinsed away. This process ensures the thorough elimination of that pesky mold and algae yet will NEVER damage your home!</p>
                <button>Request a Quote</button>
            </div>
            
            
        </div>
        <div className="service-container">
            <div className="services-grid-item" id="deck">
                <div className="service-description">
                    <h4>Deck and Patio Cleaning</h4>
                </div>
            </div>
            <div className="service-info">
                <p>We gently wash all wood and composite deck boards, steps, and railings with a custom cleanser and algaecide. The cleanser lifts and removes surface marks while the algaecide eliminates organic growth and protects your deck against future damage.</p>
                <button>Request a Quote</button>
            </div>
            
            
        </div>
        <div className="service-container">
            <div className="services-grid-item" id="fence">
                <div className="service-description">
                    <h4>Fence Cleaning</h4>
                </div>
            </div>
            <div className="service-info">
                <p>Our low-pressure “soft-washing” method is utilized to clean your home while keeping the surface material safe in the process. Our cleaning methods and detergents will effectively restore stucco, brick, hardiplank, vinyl, aluminum, and more back to its original beauty! The specific detergents and surfactants that we use create the right blend of chemicals will dig deep into the filth and grime that exist on your home’s exterior and then be easily rinsed away. This process ensures the thorough elimination of that pesky mold and algae yet will NEVER damage your home!</p>
                <button>Request a Quote</button>
            </div>
            
            
        </div>
        <div className="service-container">
            <div className="services-grid-item" id="rust">
                <div className="service-description">
                    <h4>Rust Removal</h4>
                </div>
            </div>
            <div className="service-info">
                <p>We gently wash all wood and composite deck boards, steps, and railings with a custom cleanser and algaecide. The cleanser lifts and removes surface marks while the algaecide eliminates organic growth and protects your deck against future damage.</p>
                <button>Request a Quote</button>
            </div>
            
            
        </div>
        
        <div className="service-container">
            <div className="services-grid-item" id="paint">
                <div className="service-description">
                    <h4>Graffiti Removal</h4>
                </div>
            </div>
            <div className="service-info">
                <p>We gently wash all wood and composite deck boards, steps, and railings with a custom cleanser and algaecide. The cleanser lifts and removes surface marks while the algaecide eliminates organic growth and protects your deck against future damage.</p>
                <button>Request a Quote</button>
            </div>
            
        </div>
      </div>
    );
  }
  
  export default Services;