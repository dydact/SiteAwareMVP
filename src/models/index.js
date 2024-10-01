// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Employee, Client, TreatmentPlan, Task, Device, Site, Report, Observation, Context } = initSchema(schema);

export {
  Employee,
  Client,
  TreatmentPlan,
  Task,
  Device,
  Site,
  Report,
  Observation,
  Context
};