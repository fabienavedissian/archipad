// MODULES
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

// SERVICES
import { User, UserService } from './user.service';


describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should try login request', fakeAsync(() => {
    let user: User;
    service.login('test@login.com', 'secret!').then(_user => user = _user);
    tick(1000);
    expect(user.login.length).toBeGreaterThan(0);
    expect(user.name.length).toBeGreaterThan(0);
    expect(user.userId).toBeGreaterThan(0);
  }));
});
