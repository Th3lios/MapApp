const messages = {
  // INFOs
  SUCCESS_ACCOUNT_CREATED: {
    type: 'success',
    code: 'auth/account-created',
    title: 'Bienvenido!',
    text: 'Ya eres un letmuver!',
  },
  SUCCESS_CHALLENGE_CREATED: {
    type: 'success',
    code: 'challenge/challenge-created',
    title: 'Challenge',
    text: 'Challenge añadido',
  },
  // ERRORs
  ERROR_BAD_CONNECTION: {
    type: 'error',
    code: 'auth/user-registration',
    title: 'Problemas de conexión?',
    text: 'Intenta registrarte más tarde o trata de iniciar sesión',
  },
  ERROR_EMAIL_ALREADY_IN_USE: {
    type: 'error',
    code: 'auth/email-already-in-use',
    title: 'Ups!',
    text:
      'Al parecer ya tienes una cuenta. El email ya se encuentra registrado en nuestro sistema.',
  },
  ERROR_USER_NOT_FOUND: {
    type: 'error',
    code: 'auth/user-not-found',
    title: 'Ups! No encontramos tu email',
    text: 'Parece que no te has registrado, o quizás te equivocaste de email.',
  },
  ERROR_WRONG_PASSWORD: {
    type: 'error',
    code: 'auth/wrong-password',
    title: 'Ups!',
    text: 'Al parecer te equivocaste de contraseña!. Intenta de nuevo ;)',
  },
  ERROR_INVALID_EMAIL: {
    type: 'error',
    code: 'auth/invalid-email',
    title: 'Ups! Email inválido',
    text: 'Se ve raro tu email, inserta uno más real.',
  },
};

export default messages;
