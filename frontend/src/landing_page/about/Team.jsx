import React from 'react';

function Team() {
    return ( 
        <div className="container">
            <div className="row p-4 mt-5 border-top ">
                <h1 className='text-center'>People</h1>
            </div>

            <div className="row p-4 text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className="col p-5 text-center">
                    <img src="media/images/parthRamani.jpg" alt="" style={{borderRadius:"100%", width:"50%"}} />
                    <h4 className='mt-5'>Parth Ramani</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col p-5">
                    <p>
                        Nithin bootstrapped and founded BullBear in 2024 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        BullBear has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a href="" style={{textDecorationLine:"none"}}>Homepage</a> / <a href="" style={{textDecorationLine:"none"}}>TradingQnA</a> /{" "}
                        <a href="" style={{textDecorationLine:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;