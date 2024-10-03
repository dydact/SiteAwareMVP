export const schema = `
  type Todo @model @auth(rules: [{allow: public}]) {
    id: ID!
    name: String!
    description: String
  }
`;