import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { videoType } from "../types/videoType";

type ContextType = {
  isVoteOpen: boolean;
  setIsVoteOpen: Dispatch<SetStateAction<boolean>>;
  currentVideoId?: number;
  setCurrentVideoId?: Dispatch<SetStateAction<number | undefined>>;
};
const VoteContext = createContext<ContextType | null>(null);

export const VoteProvider = ({ children }: PropsWithChildren) => {
  const [isVoteOpen, setIsVoteOpen] = useState<boolean>(false);
  const [currentVideoId, setCurrentVideoId] = useState<number>();
  return (
    <VoteContext.Provider
      value={{ isVoteOpen, setIsVoteOpen, currentVideoId, setCurrentVideoId }}
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
