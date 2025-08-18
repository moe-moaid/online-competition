import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ContextType = {
  isVoteOpen: boolean;
  setIsVoteOpen: Dispatch<SetStateAction<boolean>>;
};
const VoteContext = createContext<ContextType | null>(null);

export const VoteProvider = ({ children }: PropsWithChildren) => {
  const [isVoteOpen, setIsVoteOpen] = useState<boolean>(false);
  return (
    <VoteContext.Provider value={{ isVoteOpen, setIsVoteOpen }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVoteContext should be used within VoteProvider");
  }
  return context;
};
