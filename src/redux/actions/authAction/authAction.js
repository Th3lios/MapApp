export const LOGIN_AUTHENTICATION = 'LOGIN_AUTHENTICATION';

export const loginAuthentication = (userList, user) => {
  return {type: 'LOGIN_AUTHENTICATION', data: {userList: userList, user: user}};
};
