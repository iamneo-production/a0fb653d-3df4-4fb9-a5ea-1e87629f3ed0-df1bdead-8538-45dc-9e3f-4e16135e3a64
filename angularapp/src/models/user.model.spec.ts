import { User } from './user.model';

describe('User Models', () => {
  fit('Frontend_should_create_User_instance', () => {
    const user: User = {
      username: 'admin123',
      password: 'securePassword',
      role: 'ADMIN'
    };
    expect(user).toBeTruthy();
    expect(user.username).toBe('admin123');
    expect(user.password).toBe('securePassword');
    expect(user.role).toBe('ADMIN');
  });

  // it('Week4_Day3_should_create_User_instance_with_default_values', () => {
  //   const user: User = {
  //     username: 'organizer456',
  //     password: 'anotherPassword',
  //     role: 'ORGANIZER'
  //   };
  //   expect(user).toBeTruthy();
  //   expect(user.username).toBe('organizer456');
  //   expect(user.password).toBe('anotherPassword');
  //   expect(user.role).toBe('ORGANIZER');
  // });
});
