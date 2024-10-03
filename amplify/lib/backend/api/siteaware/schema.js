"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = `
  type Todo @model @auth(rules: [{allow: public}]) {
    id: ID!
    name: String!
    description: String
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYmFja2VuZC9hcGkvc2l0ZWF3YXJlL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLE1BQU0sR0FBRzs7Ozs7O0NBTXJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gYFxuICB0eXBlIFRvZG8gQG1vZGVsIEBhdXRoKHJ1bGVzOiBbe2FsbG93OiBwdWJsaWN9XSkge1xuICAgIGlkOiBJRCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICB9XG5gOyJdfQ==