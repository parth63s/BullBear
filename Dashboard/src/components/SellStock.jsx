import React from 'react';

function SellStock() {
    return ( 
        <div className="container buy-container">
                <div className="row sell-title">
                    <h6>Buy ONGC NSE X 1 Qty</h6>
                    <div className="row">
                        <div class="form-check form-check-inline col-2">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="BSE" value="BSE"/>
                            <label class="form-check-label" for="BSE">BSE &#8377; 170.70</label>
                        </div>
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="NSE" value="NSE"/>
                            <label class="form-check-label" for="NSE">NSE &#8377; 170.75</label>
                        </div>
                    </div>
                </div>
                <div className="row sell-second-box">
                    <div className='p-3' style={{backgroundColor:"#ecedf0"}}>
                        <a href="Regular" className='buy-info'>Regular</a>
                        <a href="Cover"  className='buy-info'>Cover</a>
                        <a href="AMO"  className='buy-info'>AMO</a>
                    </div>
                </div>

                
                <div className="row p-4">
                    <div class="form-check form-check-inline col-6">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="BSE" value="BSE"/>
                        <label class="form-check-label" for="BSE">Intraday MIS</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="NSE" value="NSE"/>
                        <label class="form-check-label" for="NSE">Longterm</label>
                    </div>
                </div>

                <div className="row p-2">
                    <div class="input-wrapper col-2">
                        <label for="first" className="form-label">Qty.</label>
                        <input type="number" className='form-control'/>
                    </div>    
                    <div class="input-wrapper col-2">
                        <label for="first" className="form-label">Price</label>
                        <input type="number" className='form-control'/>
                    </div>    
                    <div class="input-wrapper col-2">
                        <label for="first" className="form-label">Trigger price</label>
                        <input type="number" className='form-control'/>
                    </div>    
                </div>

                <div className="row p-2 mb-4">
                    {/* <div class="col-2">
                        <a href="more">More</a>
                    </div> */}

                    <div className="col-5"></div>
                    <div className="col-3">
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="BSE" value="BSE"/>
                            <label class="form-check-label" for="BSE">Market</label>
                        </div>
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="NSE" value="NSE"/>
                            <label class="form-check-label" for="NSE">Limit</label>
                        </div>
                    </div>

                    <div className="col-2"></div>
                    <div className="col-2">
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="BSE" value="BSE"/>
                            <label class="form-check-label" for="BSE">SL</label>
                        </div>
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="NSE" value="NSE"/>
                            <label class="form-check-label" for="NSE">SL-M</label>
                        </div>
                    </div>
                </div>

                <div className="row p-5 sell-last-box" style={{backgroundColor:"#ecedf0"}}>
                        <div className="col-6 margin">
                            <p>Margin required &#8377; 140.70</p>
                        </div>
                        <div className="col-3">
                            <button type="button" className='sell-btn'>Buy</button>
                            <button type="button" class="cancel-btn ">Cancel</button>
                        </div>
                </div>

               


        </div>
     );
}

export default SellStock;