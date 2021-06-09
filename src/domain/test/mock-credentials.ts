import { LogInCredentials } from '@/domain/usecases/authentication';
import faker from 'faker';

export const mockCredentials = (): LogInCredentials => ({
   email: faker.internet.email(),
   password: faker.internet.password(),
});