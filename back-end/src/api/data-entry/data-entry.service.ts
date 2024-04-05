import { Injectable } from '@nestjs/common';
import StorageData from 'src/models/storage';
import { StorageService } from 'src/storage/storage.service';

@Injectable()
export class DataEntryService {
  constructor(private service: StorageService) {}

  async getData(form: '1' | '2' | 'all'): Promise<StorageData[]> {
    const data = await this.service.getAll(form);
    return data;
  }

  async setData(data: StorageData): Promise<void> {
    await this.service.set(data.key, data.value);
  }

  async deleteData(key: string): Promise<void> {
    await this.service.remove(key);
  }

  async resetData(): Promise<void> {
    await this.service.reset();
  }
}
