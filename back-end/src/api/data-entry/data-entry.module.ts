import { Module } from '@nestjs/common';
import { DataEntryController } from './data-entry.controller';
import { DataEntryService } from './data-entry.service';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [DataEntryController],
  providers: [DataEntryService],
})
export class DataEntryModule {}
