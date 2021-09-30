export interface Service {
  name: string;
  url: string;
  createdAt: Date;
}

export interface CreateServiceData {
  name: string;
  url: string;
}
