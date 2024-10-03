export declare const backend: import("@aws-amplify/backend").Backend<{
    auth: import("@aws-amplify/plugin-types").ConstructFactory<import("@aws-amplify/backend-auth").BackendAuth>;
    data: import("@aws-amplify/plugin-types").ConstructFactory<import("@aws-amplify/graphql-api-construct").AmplifyGraphqlApi>;
    api: any;
}>;
/**
 * Developer notes:
 * This is the main entry point for your Amplify backend configuration.
 * It combines auth, data, and api resources into a single backend definition.
 */ 
