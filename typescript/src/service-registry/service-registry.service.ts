import axios, { AxiosInstance } from 'axios';
import { Agent } from 'https';

import { Logger, Injectable } from '@nestjs/common';

import {
  CreateServiceData,
  Service,
  ServiceStatus,
} from 'src/interfaces/service.interface';

@Injectable()
export class ServiceRegistryService {
  private readonly logger = new Logger(ServiceRegistryService.name);
  private services: Service[] = [];
  private axiosInstance: AxiosInstance;

  constructor() {
    this.services = [];
    this.axiosInstance = axios.create({
      httpsAgent: new Agent({
        rejectUnauthorized: false,
      }),
    });
  }

  getService(): Service[] {
    return this.services;
  }

  addService(service: CreateServiceData): Service[] {
    const createdService = {
      ...service,
      createdAt: new Date(),
      status: ServiceStatus.NOT_AVAILABLE,
    };
    this.services.push(createdService);
    return this.services;
  }

  deleteService(name: string): Service[] {
    // TODO: Add logic for deleting service
    this.logger.log(`Deleting service with name: ${name}`);
    return this.services;
  }

  pollService(): void {
    setInterval(async () => {
      this.logger.log(
        `Starting service checks for ${this.services.length} services `,
      );
      const serviceStatusChecks = this.services.map((service) =>
        this.axiosInstance(service.url),
      );
      const serviceResponses = await Promise.allSettled(serviceStatusChecks);
      this.services = this.services.map((service, index) => ({
        ...service,
        status:
          serviceResponses[index].status === 'fulfilled'
            ? ServiceStatus.ACTIVE
            : ServiceStatus.FAILED,
      }));
    }, 5000);
  }
}
