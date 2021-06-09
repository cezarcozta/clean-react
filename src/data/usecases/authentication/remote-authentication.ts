import { HttpPostClient } from '../../../data/protocols/http/http-post-client';
import { EHttpStatusCode } from '../../../data/protocols/http/http-response';
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error';
import { NotFoundError } from '../../../domain/errors/not-found-error';
import { ServerError } from '../../../domain/errors/server-error';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { AccountModel } from '../../../domain/models/account-model';
import { LogInCredentials } from '../../../domain/usecases/authentication';

export class RemoteAuthentication {
   constructor(
      private readonly url: string, 
      private readonly httpPostClient: HttpPostClient<LogInCredentials, AccountModel>
   ){}

   async auth(params: LogInCredentials): Promise<void>{
      const httpResponse = await this.httpPostClient.post({
         url: this.url,
         body: params,
      })

      switch(httpResponse.statusCode){
         case EHttpStatusCode.ok: break;
         case EHttpStatusCode.unauthorized: throw new InvalidCredentialsError()
         case EHttpStatusCode.notFound: throw new NotFoundError()
         case EHttpStatusCode.serverError: throw new ServerError()
         default: throw new UnexpectedError()
      }
   }

}