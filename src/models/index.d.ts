import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly clients?: (Client | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly clients: AsyncCollection<Client>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly employee?: Employee | null;
  readonly employeeID: string;
  readonly treatmentPlans?: (TreatmentPlan | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly employee: AsyncItem<Employee | undefined>;
  readonly employeeID: string;
  readonly treatmentPlans: AsyncCollection<TreatmentPlan>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerTreatmentPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TreatmentPlan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly client?: Client | null;
  readonly clientID: string;
  readonly tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTreatmentPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TreatmentPlan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly client: AsyncItem<Client | undefined>;
  readonly clientID: string;
  readonly tasks: AsyncCollection<Task>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TreatmentPlan = LazyLoading extends LazyLoadingDisabled ? EagerTreatmentPlan : LazyTreatmentPlan

export declare const TreatmentPlan: (new (init: ModelInit<TreatmentPlan>) => TreatmentPlan) & {
  copyOf(source: TreatmentPlan, mutator: (draft: MutableModel<TreatmentPlan>) => MutableModel<TreatmentPlan> | void): TreatmentPlan;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly supervised: boolean;
  readonly treatmentPlan?: TreatmentPlan | null;
  readonly treatmentPlanID: string;
  readonly device?: Device | null;
  readonly deviceID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly supervised: boolean;
  readonly treatmentPlan: AsyncItem<TreatmentPlan | undefined>;
  readonly treatmentPlanID: string;
  readonly device: AsyncItem<Device | undefined>;
  readonly deviceID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerDevice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Device, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Device, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly tasks: AsyncCollection<Task>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Device = LazyLoading extends LazyLoadingDisabled ? EagerDevice : LazyDevice

export declare const Device: (new (init: ModelInit<Device>) => Device) & {
  copyOf(source: Device, mutator: (draft: MutableModel<Device>) => MutableModel<Device> | void): Device;
}

type EagerSite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Site, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly location?: string | null;
  readonly reports?: (Report | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Site, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly location?: string | null;
  readonly reports: AsyncCollection<Report>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Site = LazyLoading extends LazyLoadingDisabled ? EagerSite : LazySite

export declare const Site: (new (init: ModelInit<Site>) => Site) & {
  copyOf(source: Site, mutator: (draft: MutableModel<Site>) => MutableModel<Site> | void): Site;
}

type EagerReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly site?: Site | null;
  readonly siteID: string;
  readonly observations?: (Observation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly site: AsyncItem<Site | undefined>;
  readonly siteID: string;
  readonly observations: AsyncCollection<Observation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Report = LazyLoading extends LazyLoadingDisabled ? EagerReport : LazyReport

export declare const Report: (new (init: ModelInit<Report>) => Report) & {
  copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}

type EagerObservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Observation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly report?: Report | null;
  readonly reportID: string;
  readonly content: string;
  readonly category?: string | null;
  readonly severity?: number | null;
  readonly context?: Context | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly observationContextId?: string | null;
}

type LazyObservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Observation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly report: AsyncItem<Report | undefined>;
  readonly reportID: string;
  readonly content: string;
  readonly category?: string | null;
  readonly severity?: number | null;
  readonly context: AsyncItem<Context | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly observationContextId?: string | null;
}

export declare type Observation = LazyLoading extends LazyLoadingDisabled ? EagerObservation : LazyObservation

export declare const Observation: (new (init: ModelInit<Observation>) => Observation) & {
  copyOf(source: Observation, mutator: (draft: MutableModel<Observation>) => MutableModel<Observation> | void): Observation;
}

type EagerContext = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Context, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly timestamp: string;
  readonly observation?: Observation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contextObservationId?: string | null;
}

type LazyContext = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Context, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly timestamp: string;
  readonly observation: AsyncItem<Observation | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contextObservationId?: string | null;
}

export declare type Context = LazyLoading extends LazyLoadingDisabled ? EagerContext : LazyContext

export declare const Context: (new (init: ModelInit<Context>) => Context) & {
  copyOf(source: Context, mutator: (draft: MutableModel<Context>) => MutableModel<Context> | void): Context;
}