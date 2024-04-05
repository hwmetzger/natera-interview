import { DataEntryModule } from './data-entry/data-entry.module';
import { AccountModule } from './account/account.module';

export const Modules = [DataEntryModule, AccountModule] as const;
