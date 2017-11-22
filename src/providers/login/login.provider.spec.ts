import { TestBed, inject } from '@angular/core/testing';
import {LoginProvider} from "./login";


describe('LoginProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginProvider]
    });
  });

  it('should be created', inject([LoginProvider], (service: LoginProvider) => {
    expect(service).toBeTruthy();
  }));
});
