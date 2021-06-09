export enum EHttpStatusCode {
   noContent = 204,
   unauthorized = 401,
}

export type HttpResponse = {
   statusCode: EHttpStatusCode;
   body?: any;
}