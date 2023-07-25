import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CommonService } from 'src/common/common.service';
@Controller('cat')
export class CatController {
  constructor(
    @Inject("SHR") private readonly catService: any,
    // @Inject('Test') private readonly test: any,
    private readonly commonService: CommonService
  ) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll() {
    // return this.catService.findAll();
    // return this.test;
    return this.commonService.findAll('cat')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
