import { container } from 'tsyringe';

import IstorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

// import IMailProvider from './MailProvider/models/IMailProvider';

container.registerSingleton<IstorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
