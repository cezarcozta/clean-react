import faker from 'faker';
import { EHttpStatusCode } from '../../../data/protocols/http/http-response';
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error';
import { NotFoundError } from '../../../domain/errors/not-found-error';
import { ServerError } from '../../../domain/errors/server-error';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { AccountModel } from '../../../domain/models/account-model';
import { mockCredentials } from '../../../domain/test/mock-credentials';
import { LogInCredentials } from '../../../domain/usecases/authentication';
import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
   sut: RemoteAuthentication,
   httpPostClientSpy: HttpPostClientSpy<LogInCredentials, AccountModel>,
} 

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpPostClientSpy = new HttpPostClientSpy<LogInCredentials, AccountModel>()
   const sut = new RemoteAuthentication(url, httpPostClientSpy)

   return {
      sut, httpPostClientSpy
   }
}

describe('RemoteAuthentication', () => {
   test('should call HttpPostClient with correct URL', async () => {
      const url = faker.internet.url();
      const {sut, httpPostClientSpy} = makeSut(url);
      await sut.auth(mockCredentials())
      expect(httpPostClientSpy.url).toBe(url)
   })

   test('should call HttpPostClient with correct body', async () => {
      const {sut, httpPostClientSpy} = makeSut();
      const credentials =  mockCredentials()
      await sut.auth(credentials)
      expect(httpPostClientSpy.body).toEqual(credentials)
   })
   test('should throw UnexpectedError if HttpPostClient returns 400', async () => {
      const {sut, httpPostClientSpy} = makeSut();
      httpPostClientSpy.response = {
         statusCode: EHttpStatusCode.badRequest,
      }
      const promise = sut.auth(mockCredentials())
      await expect(promise).rejects.toThrow(new UnexpectedError())
   })
   test('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
      const {sut, httpPostClientSpy} = makeSut();
      httpPostClientSpy.response = {
         statusCode: EHttpStatusCode.unauthorized,
      }
      const promise = sut.auth(mockCredentials())
      await expect(promise).rejects.toThrow(new InvalidCredentialsError())
   })
   test('should throw NotFoundError if HttpPostClient returns 404', async () => {
      const {sut, httpPostClientSpy} = makeSut();
      httpPostClientSpy.response = {
         statusCode: EHttpStatusCode.notFound,
      }
      const promise = sut.auth(mockCredentials())
      await expect(promise).rejects.toThrow(new NotFoundError())
   })
   test('should throw ServerError if HttpPostClient returns 500', async () => {
      const {sut, httpPostClientSpy} = makeSut();
      httpPostClientSpy.response = {
         statusCode: EHttpStatusCode.serverError,
      }
      const promise = sut.auth(mockCredentials())
      await expect(promise).rejects.toThrow(new ServerError())
   })
})