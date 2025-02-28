import React from 'react';

function Universe() {
    return ( 
        <>
            <div className="container mt-5 ">

                <div className="row text-center">
                    <h1 className='fs-3'>The BullBear Universe</h1>
                    <p>
                        Extend your trading and investment experience even further with our
                        partner platforms
                    </p>
                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/smallcaseLogo.png" />
                        <p className='text-small text-muted'>Thematic investment platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/streakLogo.png" style={{width:"47%"}}/>
                        <p className='text-small text-muted'>Algo & strategy platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/sensibullLogo.svg" className='mb-2' style={{width:"72%"}}/>
                        <p className='text-small text-muted'>Options trading platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/BullBearFundhouse.png" style={{width:"60%"}}/>
                        <p className='text-small text-muted mt-2'>Asset management</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}/>
                        <p className='text-small text-muted mt-3'>Bonds trading platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="media/images/dittoLogo.png" style={{width:"40%"}}/>
                        <p className='text-small text-muted mt-2'>Insurance</p>
                    </div>

                    <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
                </div>
            </div>
        </>
     );
}

export default Universe;