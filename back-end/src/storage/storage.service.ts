import { Injectable, OnModuleInit } from '@nestjs/common';
import StorageData from 'src/models/storage';

@Injectable()
export class StorageService implements OnModuleInit {
  private nodePersist = require('node-persist');
  private storage = null;

  async onModuleInit() {
    this.storage = await this.nodePersist.create();
    await this.storage.init({
      dir: './src/storage/data',
      stringify: JSON.stringify,
      parse: JSON.parse,
    });
  }

  public async set(key: string, value: any): Promise<void> {
    if (await this.get(key)) {
      await this.storage.updateItem(key, value);
    } else {
      await this.storage.setItem(key, value);
    }
  }

  public async get(key: string): Promise<any> {
    return await this.storage.getItem(key);
  }

  public async getAll(form: '1' | '2' | 'all'): Promise<StorageData[]> {
    const retArr: StorageData[] = [];

    switch (form) {
      case '1':
        await this.storage.forEach(async (pair) => {
          if (pair.value.form === 1) {
            retArr.push({
              key: pair.key,
              value: pair.value,
            });
          }
        });
        break;
      case '2':
        await this.storage.forEach(async (pair) => {
          if (pair.value.form === 2) {
            retArr.push({
              key: pair.key,
              value: pair.value,
            });
          }
        });
        break;
      default:
        await this.storage.forEach(async (pair) => {
          retArr.push({
            key: pair.key,
            value: pair.value,
          });
        });
        break;
    }

    return retArr;
  }

  public async remove(key: string): Promise<void> {
    await this.storage.getItem(key);
  }

  public async reset(): Promise<void> {
    this.storage.clear();
  }
}
1;
