import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateServiceData, Service } from 'src/interfaces/service.interface';
import { ServiceRegistryService } from './service-registry.service';

@Controller('services')
export class ServiceRegistryController {
  constructor(private readonly serviceRegistryService: ServiceRegistryService) {
    serviceRegistryService.pollService();
  }

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

  @Delete()
  deleteService(@Body() service): Service[] {
    const services = this.serviceRegistryService.deleteService(service.name);
    return services;
  }
}
