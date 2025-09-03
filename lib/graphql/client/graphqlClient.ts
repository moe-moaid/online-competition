import { GraphQLClient, RequestDocument } from "graphql-request";

const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL + "/api/data",
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

export default graphqlClient;

export async function gqlRequest<T>(
  query: RequestDocument,
  variables?: Record<string, any>
): Promise<T> {
  return graphqlClient.request<T>(query, variables);
}
