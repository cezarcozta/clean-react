import { EHttpStatusCode, HttpPostClient } from '../../../data/protocols/http';
import { InvalidCredentialsError, NotFoundError, ServerError, UnexpectedError } from '../../../domain/errors';
import { AccountModel } from '../../../domain/models';
import { IAuthentication, LogInCredentials } from '../../../domain/usecases';

export class RemoteAuthentication implements IAuthentication{
   constructor(
      private readonly url: string, 
      private readonly httpPostClient: HttpPostClient<LogInCredentials, AccountModel>
   ){}

   async auth(params: LogInCredentials): Promise<AccountModel>{
      const httpResponse = await this.httpPostClient.post({
         url: this.url,
         body: params,
      })

      switch(httpResponse.statusCode){
         case EHttpStatusCode.ok: return httpResponse.body;
         case EHttpStatusCode.unauthorized: throw new InvalidCredentialsError()
         case EHttpStatusCode.notFound: throw new NotFoundError()
         case EHttpStatusCode.serverError: throw new ServerError()
         default: throw new UnexpectedError()
      }
   }

}