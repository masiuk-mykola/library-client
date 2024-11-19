export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const apiUrls = {
  books: {
    getBooks: "/api/books/",
    getBookById: "/api/books/",
    getBooksByIds: "/api/books/multiple",
    addBook: "/api/books/add"
  },
  auth: {
    login: "/api/auth/login",
    logout: "api/auth/logout",
    register: "/api/auth/register",
    getProfile: "/api/auth/profile"
  }
};
