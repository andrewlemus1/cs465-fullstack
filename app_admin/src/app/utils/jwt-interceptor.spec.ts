import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor';

describe('JwtInterceptor', () => {
  it('should be created', () => {
    const interceptor = new JwtInterceptor(TestBed.inject as any);
    expect(interceptor).toBeTruthy();
  });
});