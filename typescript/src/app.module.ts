import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceRegistryController } from './service-registry/service-registry.controller';
import { ServiceRegistryService } from './service-registry/service-registry.service';

@Module({
  imports: [],
  controllers: [AppController, ServiceRegistryController],
  providers: [AppService, ServiceRegistryService],
})
export class AppModule {}
