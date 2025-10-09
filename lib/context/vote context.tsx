import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type ContextType = {
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
<<<<<<< Updated upstream
=======
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const paymentIntent = useMutation<
    { createPaymentIntent: string }, 
    Error, 
    number 
  >({
    mutationFn: (videoId) => createPaymentIntent(videoId),
    onSuccess: (data) => {
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

>>>>>>> Stashed changes
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
