import { LogInCredentials } from '@/domain/usecases';
import faker from 'faker';
import { AccountModel } from '../models';

export const mockCredentials = (): LogInCredentials => ({
   email: faker.internet.email(),
   password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
   access_token: faker.datatype.uuid()
});