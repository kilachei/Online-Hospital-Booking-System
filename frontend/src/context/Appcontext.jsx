import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(); // Correctly invoking createContext

const AppContextProvider = (props) => {

  const currencySymbol = 'ksh'

  const value = {
    doctors,
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
