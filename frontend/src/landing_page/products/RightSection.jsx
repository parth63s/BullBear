import React from 'react';

function RightSection({imageURL, productName, productDesription, LearnMore}) {
    return ( 
        <div className="container p-2 ">
            <div className="row">
                <div className="col-6 mt-5 p-5">
                    <h1 className='fs-3 mt-3 mb-3'>{productName}</h1>
                    <p className='text-muted'>{productDesription}</p>
                    <a href={LearnMore} style={{textDecoration:"none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-6 " >
                    <img src={imageURL} alt="" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;