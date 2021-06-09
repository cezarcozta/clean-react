import { AccountModel } from '../models/account-model'

export type LogInCredentials = {
   email: string;
   password: string;
}

export interface IAuthentication {
   auth(credential: LogInCredentials): Promise<AccountModel>; 
}