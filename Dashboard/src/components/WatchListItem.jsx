import React, { useContext, useState } from 'react';
import {Tooltip , Grow} from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import {GeneralContext} from './GeneralContext';


const WatchListItem = (({stock}) => { 
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);
    
    const handleMouseEnter = (e) => {
      setShowWatchlistActions(true);
    }

    const handleMouseExit = (e) => {
      setShowWatchlistActions(false);
    }

    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">
                {stock.percent}
            </span>
            {stock.isDown ? <KeyboardArrowDown className="down"/> : <KeyboardArrowUp className="up"/>}
            <span className="price">
                {stock.price}
            </span>
          </div>
        </div>
        {showWatchlistActions && <WatchListActions uid={stock.name} />}
      </li>
    )
})

export default WatchListItem;


const WatchListActions = ({uid}) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    }

    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    }
    return (
      <span className="actions">
        <span>
          <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}  onClick={handleBuyClick}>
            <button className="buy">B</button>
          </Tooltip>
          
          <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} onClick={handleSellClick}>
            <button className="sell">S</button>
          </Tooltip>

          <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <BarChartOutlined className='icon'/>
          </Tooltip>

          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            
            <MoreHoriz className='icon'/>
          </Tooltip>
        </span>
      </span>
    )
  } 