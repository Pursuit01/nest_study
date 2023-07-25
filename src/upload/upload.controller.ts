import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer'; 
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album') 
  // 拦截器，意味着当请求中包含名为 file 的上传文件字段时，该拦截器将会拦截并处理该请求
  @UseInterceptors(FileInterceptor('file'))
  // UploadedFile装饰器用于 将上传的文件绑定到 file 参数上。然后您可以对文件进行进一步的处理和操作。
  upload(@UploadedFile() file) {
    console.log(file)
    return true;
    
  }
}
