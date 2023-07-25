import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';

@Global()
@Module({

})
export class ConfigModule {

  static forRoot(options: any):DynamicModule {
    return {
      module: ConfigModule,
      controllers: [ConfigController],
      providers: [
        ConfigService,
        {provide: 'config', useValue: `shr-${options.path}`}
      ],
      exports: [
        {provide: 'config', useValue:`shr-${options.path}`}
      ]
    }
  }
}
