import { Controller, Get } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
@Controller('user')
export class UserController {
  constructor(
    private readonly commonService : CommonService
  ) {}
  
  @Get()
  getHello(): string {
    return this.commonService.findAll('user')
  }
}
