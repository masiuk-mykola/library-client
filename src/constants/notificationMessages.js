export const notification = (t) => ({
  register: {
    success: t('registerSuccess'),
    error: t('registerError')
  },
  login: {
    success: t('loginSuccess'),
    error: t('loginError')
  },
  logout: {
    success: t('logoutSuccess'),
    error: t('logoutError')
  },
  addBook: {
    success: t('addBookSuccess'),
    error: t('addBookError')
  }
});
