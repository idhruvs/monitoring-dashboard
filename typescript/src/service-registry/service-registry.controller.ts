import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateServiceData, Service } from 'src/interfaces/service.interface';
import { ServiceRegistryService } from './service-registry.service';

@Controller('service-registry')
export class ServiceRegistryController {
  constructor(
    private readonly serviceRegistryService: ServiceRegistryService,
  ) {}

  @Get()
  getServices(): Service[] {
    const services = this.serviceRegistryService.getService();
    return services;
  }

  @Post()
  addService(@Body() serviceData: CreateServiceData): Service[] {
    const services = this.serviceRegistryService.addService(serviceData);
    return services;
  }
}
