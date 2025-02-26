import React, { useState } from "react";
import BuyStock from "./BuyStock";
import SellStock from "./SellStock";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setIsBuyWindowOpen(false);
        setSelectedStockUID(uid);
      };
    
      const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
      };

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyStock uid={selectedStockUID} />}
      {isSellWindowOpen && <SellStock uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};


export {GeneralContext, GeneralContextProvider};