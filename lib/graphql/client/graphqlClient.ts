import { GraphQLClient, RequestDocument } from 'graphql-request';

const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_BASE_URL + 'api/data',
  {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export default graphqlClient;

export async function gqlRequest<T>(
  query: RequestDocument,
  variables?: Record<string, any>,
): Promise<T> {
  return graphqlClient.request<T>(query, variables);
}
