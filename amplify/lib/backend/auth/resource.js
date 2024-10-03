"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const cdk = require("aws-cdk-lib");
function auth(stack, id) {
    // Example: Adding a custom attribute to the user pool
    const userPool = new cdk.aws_cognito.UserPool(stack, id, {
        // ...standard Cognito UserPool configuration
        customAttributes: {
            // Example Custom Attribute
            'company': new cdk.aws_cognito.StringAttribute({ mutable: true }),
        },
    });
    return userPool; // Return the resource if you need to reference it elsewhere
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kL2F1dGgvcmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvQkFXQztBQWJELG1DQUFtQztBQUVuQyxTQUFnQixJQUFJLENBQUMsS0FBZ0IsRUFBRSxFQUFVO0lBQy9DLHNEQUFzRDtJQUN0RCxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsNkNBQTZDO1FBQzdDLGdCQUFnQixFQUFFO1lBQ2hCLDJCQUEyQjtZQUMzQixTQUFTLEVBQUUsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNsRTtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU8sUUFBUSxDQUFDLENBQUMsNERBQTREO0FBQy9FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuXG5leHBvcnQgZnVuY3Rpb24gYXV0aChzdGFjazogY2RrLlN0YWNrLCBpZDogc3RyaW5nKSB7XG4gIC8vIEV4YW1wbGU6IEFkZGluZyBhIGN1c3RvbSBhdHRyaWJ1dGUgdG8gdGhlIHVzZXIgcG9vbFxuICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjZGsuYXdzX2NvZ25pdG8uVXNlclBvb2woc3RhY2ssIGlkLCB7XG4gICAgLy8gLi4uc3RhbmRhcmQgQ29nbml0byBVc2VyUG9vbCBjb25maWd1cmF0aW9uXG4gICAgY3VzdG9tQXR0cmlidXRlczoge1xuICAgICAgLy8gRXhhbXBsZSBDdXN0b20gQXR0cmlidXRlXG4gICAgICAnY29tcGFueSc6IG5ldyBjZGsuYXdzX2NvZ25pdG8uU3RyaW5nQXR0cmlidXRlKHsgbXV0YWJsZTogdHJ1ZSB9KSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gdXNlclBvb2w7IC8vIFJldHVybiB0aGUgcmVzb3VyY2UgaWYgeW91IG5lZWQgdG8gcmVmZXJlbmNlIGl0IGVsc2V3aGVyZVxufVxuIl19