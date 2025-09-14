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
  isChangeVoteOpen: boolean;
  setIsChangeVoteOpen: Dispatch<SetStateAction<boolean>>;
  currentVoteVideoId?: number;
  setCurrentVoteVideoId?: Dispatch<SetStateAction<number | undefined>>;
};
export const VoteContext = createContext<ContextType | null>(null);

export const VoteProvider = ({ children }: PropsWithChildren) => {
  const [isVoteOpen, setIsVoteOpen] = useState<boolean>(false);
  const [isChangeVoteOpen, setIsChangeVoteOpen] = useState<boolean>(false);
  const [currentVoteVideoId, setCurrentVoteVideoId] = useState<number>();
  return (
    <VoteContext.Provider
      value={{ isVoteOpen, setIsVoteOpen, currentVoteVideoId, setCurrentVoteVideoId, isChangeVoteOpen, setIsChangeVoteOpen }}
    >
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
