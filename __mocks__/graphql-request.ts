// __mocks__/graphql-request.ts

// mock GraphQLClient class
export class GraphQLClient {
  constructor(_url: string, _options?: unknown) {}
  request<T = unknown>(_query: string, _variables?: any): Promise<T> {
    return Promise.resolve({} as T);
  }
}

export const request = jest.fn();

// mock gql tag
export const gql = (strings: TemplateStringsArray, ..._values: any[]) => {
  // simply return the string joined, or the first string
  return strings.join("");
};

