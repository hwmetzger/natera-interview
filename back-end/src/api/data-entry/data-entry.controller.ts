import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DataEntryService } from './data-entry.service';
import StorageData from 'src/models/storage';

@Controller('data-entry')
export class DataEntryController {
  constructor(private readonly service: DataEntryService) {}

  @Get()
  getAllData() {
    return this.service.getData('all');
  }

  @Get('/:form')
  getData(@Param('form') form: '1' | '2') {
    return this.service.getData(form);
  }

  @Post()
  setData(@Body() body: StorageData) {
    return this.service.setData(body);
  }

  @Delete('/:key')
  deleteData(@Param('key') key: string) {
    return this.service.deleteData(key);
  }

  @Post('reset')
  resetData() {
    return this.service.resetData();
  }
}
