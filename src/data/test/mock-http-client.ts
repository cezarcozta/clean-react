import { EHttpStatusCode, HttpPostClient, HttpPostParams, HttpResponse } from '../protocols/http';

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
   url?: string;
   body?: T;
   response: HttpResponse<R> = {
      statusCode: EHttpStatusCode.ok
   }

   async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
      this.url = params.url
      this.body = params.body
      return  Promise.resolve(this.response)
   }
}