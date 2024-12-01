import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5 p-6">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" style={{width:"95%"}}/>
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <div className="row">
                        <div className="col-6">
                            <li>Futures and Options</li><br />
                            <li>Commodity derivatives</li><br />
                            <li>Currency derivatives</li><br />
                        </div>
                        <div className="col-6 ">
                            <li>Stocks & IPOs</li><br />
                            <li>Direct mutual funds</li><br />
                            <li>Bonds and Govt. Securities</li><br />
                        </div>
                    </div>
                    
                    <img src="media/images/pressLogos.png" alt="" style={{width:"80%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;