import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>

            <div className="p-3" id='supportWrapper'>
                <h4 className='mt-1'>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-3 mx-5" >
                <div className="col-6 p-3">
                    <h1 className='fs-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mt-1 mb-1' type="text" placeholder='Eg. how do I activate F&O, Why is my order getting rejected.'/>
                    <br />
                    <a href="" >Track account opening</a>
                    <a href="" style={{marginLeft:"0.9rem"}}>Track segment activation</a>
                    <a href="" style={{marginLeft:"0.9rem"}}>Intraday margins</a>
                    <a href="" style={{marginLeft:"0.9rem"}}>Kite user manual</a>
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-3" >
                    <h1 className='fs-5 text-center'>Featured</h1>
                    <ol className='mx-3'>
                        <li>
                            <a href=""  style={{textDecoration:"none", lineHeight:"2.5"}}>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;