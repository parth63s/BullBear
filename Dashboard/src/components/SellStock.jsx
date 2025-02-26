import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { GeneralContext } from './GeneralContext';

function SellStock({uid}) {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleSellClick = () => {
        GeneralContext.closeBuyWindow();
      };
    
    const handleCancelClick = () => {
        GeneralContext.closeSellWindow();
    };

    return ( 
        <div className="container" tabIndex="-1" id="buy-window" draggable="true">
            <div className="sell-title">
                <h6>Buy {uid} NSE X 1 Qty</h6>
            </div>
            <div className="row buy-second-box">
                <div className='p-3' style={{backgroundColor:"#ecedf0"}}>
                    <a href="Regular" className='buy-info'>Regular</a>
                    <a href="Cover"  className='buy-info'>Cover</a>
                    <a href="AMO"  className='buy-info'>AMO</a>
                </div>
            </div>
            <div className="regular-order ">
                <div className="inputs">
                    <div className="input-wrapper col-4">
                        <label htmlFor="first" className="form-label">Qty.</label>
                        <input type="number" className='form-control' onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}/>
                    </div>    
                    <div className="input-wrapper col-4">
                        <label htmlFor="first" className="form-label">Price</label>
                        <input type="number" className='form-control'onChange={(e)=>setStockPrice(e.target.value)} />
                    </div>    
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn sell-btn " onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default SellStock;