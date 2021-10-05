export enum ServiceStatus {
  ACTIVE = 'ACTIVE',
  FAILED = 'FAILED',
  NOT_AVAILABLE = 'NOT AVAILABLE',
}

export interface Service {
  name: string;
  url: string;
  createdAt: Date;
  status: ServiceStatus;
}

export interface CreateServiceData {
  name: string;
  url: string;
}
