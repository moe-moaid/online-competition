import { GraphQLClient, RequestDocument } from 'graphql-request';

const graphqlClient = (token?: string) => {
  new GraphQLClient(process.env.NEXT_PUBLIC_API_BASE_URL + 'api/data', {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: 'include',
  });
};

export default graphqlClient;

export async function gqlRequest<T>(
  query: RequestDocument,
  variables?: Record<string, any>,
): Promise<T> {
  return graphqlClient.request<T>(query, variables);
}
