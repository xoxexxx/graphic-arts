import { createContext, useState } from "react";

export const CurrentContext = createContext([{}, () => {}]);
export const CurrentProvider = ({ children }) => {
    const [state, setState] = useState(false)
  return (
    <CurrentContext.Provider value={[state, setState]}>
      {children}
    </CurrentContext.Provider>
  );
};