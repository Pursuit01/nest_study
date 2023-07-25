import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UserModule, CatModule, CommonModule, ConfigModule.forRoot({
    path: '/path'
  }), UploadModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  
}
