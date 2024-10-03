"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backend = void 0;
const backend_1 = require("@aws-amplify/backend");
const resource_1 = require("./auth/resource");
const resource_2 = require("./data/resource");
const resource_3 = require("./api/resource");
exports.backend = (0, backend_1.defineBackend)({
    auth: resource_1.auth,
    data: resource_2.data,
    api: resource_3.api,
});
/**
 * Developer notes:
 * This is the main entry point for your Amplify backend configuration.
 * It combines auth, data, and api resources into a single backend definition.
 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2JhY2tlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQXFEO0FBQ3JELDhDQUF1QztBQUN2Qyw4Q0FBdUM7QUFDdkMsNkNBQXFDO0FBRXhCLFFBQUEsT0FBTyxHQUFHLElBQUEsdUJBQWEsRUFBQztJQUNuQyxJQUFJLEVBQUosZUFBSTtJQUNKLElBQUksRUFBSixlQUFJO0lBQ0osR0FBRyxFQUFILGNBQUc7Q0FDSixDQUFDLENBQUM7QUFFSDs7OztHQUlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lQmFja2VuZCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9iYWNrZW5kJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuL2F1dGgvcmVzb3VyY2UnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YS9yZXNvdXJjZSc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuL2FwaS9yZXNvdXJjZSc7XG5cbmV4cG9ydCBjb25zdCBiYWNrZW5kID0gZGVmaW5lQmFja2VuZCh7XG4gIGF1dGgsXG4gIGRhdGEsXG4gIGFwaSxcbn0pO1xuXG4vKipcbiAqIERldmVsb3BlciBub3RlczpcbiAqIFRoaXMgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHlvdXIgQW1wbGlmeSBiYWNrZW5kIGNvbmZpZ3VyYXRpb24uXG4gKiBJdCBjb21iaW5lcyBhdXRoLCBkYXRhLCBhbmQgYXBpIHJlc291cmNlcyBpbnRvIGEgc2luZ2xlIGJhY2tlbmQgZGVmaW5pdGlvbi5cbiAqLyJdfQ==