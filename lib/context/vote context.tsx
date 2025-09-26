import { useMutation } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPaymentIntent } from "../services/vote";

type ContextType = {
  isVoteOpen: boolean;
  setIsVoteOpen: Dispatch<SetStateAction<boolean>>;
  isChangeVoteOpen: boolean;
  setIsChangeVoteOpen: Dispatch<SetStateAction<boolean>>;
  currentVoteVideoId?: number;
  setCurrentVoteVideoId?: Dispatch<SetStateAction<number | undefined>>;
  clientSecret: string | undefined;
  setClientSecret: Dispatch<SetStateAction<string | undefined>>;
};
export const VoteContext = createContext<ContextType | null>(null);

export const VoteProvider = ({ children }: PropsWithChildren) => {
  const [isVoteOpen, setIsVoteOpen] = useState<boolean>(false);
  const [isChangeVoteOpen, setIsChangeVoteOpen] = useState<boolean>(false);
  const [currentVoteVideoId, setCurrentVoteVideoId] = useState<number>();
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const paymentIntent = useMutation<
    { createPaymentIntent: string }, // TData
    Error, // TError
    number // TVariables
  >({
    mutationFn: (videoId) => createPaymentIntent(videoId),
    onSuccess: (data) => {
      // data.createPaymentIntent is a string
      setClientSecret(data.createPaymentIntent);
    },
    onError: (err) => {
      console.log('error occured while fetching', err);
    }
  });
  useEffect(() => {
  if (isVoteOpen && currentVoteVideoId) {
    paymentIntent.mutate(currentVoteVideoId);
  }
  }, [isVoteOpen, currentVoteVideoId])

  return (
    <VoteContext.Provider
      value={{
        isVoteOpen,
        setIsVoteOpen,
        currentVoteVideoId,
        setCurrentVoteVideoId,
        isChangeVoteOpen,
        setIsChangeVoteOpen,
        clientSecret,
        setClientSecret,
      }}
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
