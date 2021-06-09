import { LogInCredentials } from '@/domain/usecases/authentication';
import faker from 'faker';
import { AccountModel } from '../models/account-model';

export const mockCredentials = (): LogInCredentials => ({
   email: faker.internet.email(),
   password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
   access_token: faker.datatype.uuid()
});