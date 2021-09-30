import { Injectable } from '@nestjs/common';
import { CreateServiceData, Service } from 'src/interfaces/service.interface';

@Injectable()
export class ServiceRegistryService {
  private services: Service[] = [];
  constructor() {
    this.services = [];
  }

  getService(): Service[] {
    return this.services;
  }

  addService(service: CreateServiceData): Service[] {
    const createdService = { ...service, createdAt: new Date() };
    this.services.push(createdService);
    return this.services;
  }
}
