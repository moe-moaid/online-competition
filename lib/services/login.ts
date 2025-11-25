import { gqlRequest } from '@/lib/graphql/client/graphqlClient';
import { LOGIN } from '../graphql/mutations/mutations';
import { useMutation } from '@tanstack/react-query';

type LoginReturnType = {
  login: {
    accessToken: string;
    refreshToken: string;
  };
};

async function loginFn(email: string, password: string) {
  return gqlRequest<LoginReturnType>(LOGIN, { email, password });
}

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginFn(email, password),
  });
}
