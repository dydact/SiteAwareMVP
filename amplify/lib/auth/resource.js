"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const backend_1 = require("@aws-amplify/backend");
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
exports.auth = (0, backend_1.defineAuth)({
    loginWith: {
        email: true,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hdXRoL3Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUFrRDtBQUVsRDs7O0dBR0c7QUFDVSxRQUFBLElBQUksR0FBRyxJQUFBLG9CQUFVLEVBQUM7SUFDN0IsU0FBUyxFQUFFO1FBQ1QsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUF1dGggfSBmcm9tICdAYXdzLWFtcGxpZnkvYmFja2VuZCc7XG5cbi8qKlxuICogRGVmaW5lIGFuZCBjb25maWd1cmUgeW91ciBhdXRoIHJlc291cmNlXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5hbXBsaWZ5LmF3cy9nZW4yL2J1aWxkLWEtYmFja2VuZC9hdXRoXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoID0gZGVmaW5lQXV0aCh7XG4gIGxvZ2luV2l0aDoge1xuICAgIGVtYWlsOiB0cnVlLFxuICB9LFxufSk7XG4iXX0=