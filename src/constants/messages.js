const messages = {
  // ERRORs
  ERROR_BAD_CONNECTION: {
    type: 'error',
    code: 'auth/user-registration',
    title: 'Ups!',
    text: 'Bad Connection',
  },
  ERROR_EMAIL_ALREADY_IN_USE: {
    type: 'error',
    code: 'auth/email-already-in-use',
    title: 'Ups!',
    text: 'Email already in use.',
  },
  ERROR_USER_NOT_FOUND: {
    type: 'error',
    code: 'auth/user-not-found',
    title: 'Ups!',
    text: 'User not found.',
  },
  ERROR_WRONG_PASSWORD: {
    type: 'error',
    code: 'auth/wrong-password',
    title: 'Ups!',
    text: 'Invalid information',
  },
  ERROR_INVALID_EMAIL: {
    type: 'error',
    code: 'auth/invalid-email',
    title: 'Ups!',
    text: 'Invalid information.',
  },
  WEAK_PASSWORD: {
    type: 'error',
    code: 'auth/weak-password',
    title: 'Ups!',
    text: 'Weak password.',
  },
};

export default messages;
