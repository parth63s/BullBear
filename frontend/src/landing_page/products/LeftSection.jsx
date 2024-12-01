import React from 'react';

function LeftSection({imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container p-2 ">
            <div className="row">
                <div className="col-6 p-5">
                    <img  src={imageURL} alt="" style={{width:"80%"}}/>
                </div>
                <div className="col-6 p-5 mt-4">
                    <h1 className='fs-3 '>{productName}</h1>
                    <p>{productDesription}</p>
                    <div className='mt-3 mb-3'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"2rem",textDecoration:"none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} className='m-3'><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;