export declare const schema = "\n  type Todo @model @auth(rules: [{allow: public}]) {\n    id: ID!\n    name: String!\n    description: String\n  }\n";
