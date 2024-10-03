"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const backend_1 = require("@aws-amplify/backend");
exports.data = (0, backend_1.defineData)({
    schema: backend_1.Schema.fromString(`
    # Your GraphQL schema here
  `),
    // Additional data configuration options
});
/**
 * Developer notes:
 * This file defines the data schema and configuration for your Amplify backend.
 * Modify the schema and options as needed for your project.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kYXRhL3Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUEwRDtBQUU3QyxRQUFBLElBQUksR0FBRyxJQUFBLG9CQUFVLEVBQUM7SUFDN0IsTUFBTSxFQUFFLGdCQUFNLENBQUMsVUFBVSxDQUFDOztHQUV6QixDQUFDO0lBQ0Ysd0NBQXdDO0NBQ3pDLENBQUMsQ0FBQztBQUVIOzs7O0dBSUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVEYXRhLCBTY2hlbWEgfSBmcm9tICdAYXdzLWFtcGxpZnkvYmFja2VuZCc7XG5cbmV4cG9ydCBjb25zdCBkYXRhID0gZGVmaW5lRGF0YSh7XG4gIHNjaGVtYTogU2NoZW1hLmZyb21TdHJpbmcoYFxuICAgICMgWW91ciBHcmFwaFFMIHNjaGVtYSBoZXJlXG4gIGApLFxuICAvLyBBZGRpdGlvbmFsIGRhdGEgY29uZmlndXJhdGlvbiBvcHRpb25zXG59KTtcblxuLyoqXG4gKiBEZXZlbG9wZXIgbm90ZXM6XG4gKiBUaGlzIGZpbGUgZGVmaW5lcyB0aGUgZGF0YSBzY2hlbWEgYW5kIGNvbmZpZ3VyYXRpb24gZm9yIHlvdXIgQW1wbGlmeSBiYWNrZW5kLlxuICogTW9kaWZ5IHRoZSBzY2hlbWEgYW5kIG9wdGlvbnMgYXMgbmVlZGVkIGZvciB5b3VyIHByb2plY3QuXG4gKi9cbiJdfQ==