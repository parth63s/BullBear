import React, { useState } from "react";
import BuyStock from "./BuyStock";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

 const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyStock uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export {GeneralContext, GeneralContextProvider};