import { RolePipe } from './role.pipe';

describe('RolePipe', () => {
  const pipe = new RolePipe();

  it('create an instance', () => {
    const pipe = new RolePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform "owner" to "Administrateur"', () => {
    expect(pipe.transform('owner')).toBe('Administrateur');
  });
});
