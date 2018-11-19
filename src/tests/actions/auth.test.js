import {login, logout} from '../../actions/auth';

test('should create action object for login', () => {
  const uid = '12345abcdefgh';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});


test('should create action object for login', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});