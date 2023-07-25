import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Logging } from 'src/middleware/Logging';
@Module({
  controllers: [CatController],
  providers: [{
    provide: "SHR",
    useClass: CatService
    // useValue: [1,2,3]
  }, 
  // {
  //   provide: 'Test',
  //   inject: ['SHR'],
  //   useFactory: (test: CatService) => {
  //     return 123
  //   }
  // },
  // {
  //   provide: 'Test',
  //   async useFactory (test: CatService) {
  //     return await new Promise((resolve: any) => {
  //       setTimeout(() => {
  //         resolve(100)
  //       }, 4000)
  //     })
  //   }
  // }
]
})
export class CatModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(Logging).forRoutes({path: 'cat', method: RequestMethod.POST})

      // 传入整个 Controller
      // consumer.apply(Logging).forRoutes(CatController)
  }
}
