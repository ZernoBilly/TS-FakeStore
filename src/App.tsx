import React, { FC } from "react";

import Home from "./pages/Home";

import { ShopItemContext } from "./contexts/ShopItemContext";

const App: FC = () => {
  return (
    <div className="App">
      <ShopItemContext.Provider value={""}>
        <Home />
      </ShopItemContext.Provider>
    </div>
  );
};

export default App;
