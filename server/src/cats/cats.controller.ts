import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns #${params.id} cat`;
  }
}
