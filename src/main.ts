import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import {join} from 'path'
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
const whiteList = ['/cat']
function middlewareAll(req, res, next) {
  console.log(req.originalUrl);
  
  if(whiteList.includes(req.originalUrl)) {
    next()
  } else {
    res.send('小黑子禁止入内')
  }
}


async function bootstrap() {
  // NestExpressApplication 配置泛型，增加代码提示
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors())
  // app.use(middlewareAll)
  // 定义静态资源访问路径
  app.useStaticAssets(join(__dirname, 'images'), {
   
    prefix: '/shr',   // localhost:3000/shr/[img_name]
  })
  await app.listen(3000);
}
bootstrap();
