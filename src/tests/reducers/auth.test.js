import authReducer from '../../reducers/auth';

test('should set login state correctly', () => {
  const uid = '123456abccfghgd'; 
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);

  expect(state).toEqual({ uid });
});

test('should set logout state correctly', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: '123456aSDFBFTTREF'}, action);

  expect(state).toEqual({});
});