export const routes = {
  dashboard: {
    path: "/",
    title: "Dashboard"
  },
  login: {
    path: "/login",
    title: "Login"
  },
  register: {
    path: "/register",
    title: "Register"
  },
  resetPassword: {
    path: "/reset-password",
    title: "Reset password"
  },
  passwordRecovery: {
    path: "/password-recovery",
    title: "Password recovery"
  },
  profile: {
    path: "/profile",
    title: "Profile"
  },
  readers: {
    path: "/readers",
    title: "Readers"
  },
  authors: {
    path: "/authors",
    title: "Authors"
  },
  book: {
    path: "/book/:id",
    url: (id) => `/book/${id}`,
    title: "Book"
  }
};
