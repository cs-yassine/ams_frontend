import { TestBed } from '@angular/core/testing';

import { Users_Service  } from './users';

describe('Users', () => {
  let service: Users_Service ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users_Service );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
