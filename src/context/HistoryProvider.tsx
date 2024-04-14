import { PropsWithChildren, createContext } from "react";

interface IHistoryContext {}
export const HistoryContext = createContext({} as IHistoryContext);

const HistoryProvider = ({ children }: PropsWithChildren) => {
  return (
    <HistoryContext.Provider value={{}}>{children}</HistoryContext.Provider>
  );
};

export default HistoryProvider;
