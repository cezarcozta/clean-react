import faker from 'faker';
import { LogInCredentials } from '../../domain/usecases/authentication';

export const mockCredentials = (): LogInCredentials => ({
   email: faker.internet.email(),
   password: faker.internet.password(),
});