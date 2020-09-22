import { container } from 'tsyringe';

import IstorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IstorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
