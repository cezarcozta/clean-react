import faker from 'faker';
import { EHttpStatusCode } from '../../../data/protocols/http/http-response';
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error';
import { mockCredentials } from '../../../domain/test/mock-credentials';
import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
   sut: RemoteAuthentication,
   httpPostClientSpy: HttpPostClientSpy,
} 

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpPostClientSpy = new HttpPostClientSpy()
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
   test('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
      const {sut, httpPostClientSpy} = makeSut();
      httpPostClientSpy.response = {
         statusCode: EHttpStatusCode.unauthorized,
      }
      const promise = sut.auth(mockCredentials())
      await expect(promise).rejects.toThrow(new InvalidCredentialsError())
   })
})