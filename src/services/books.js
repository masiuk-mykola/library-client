import api from "@utils/api.js";
import { apiUrls } from "@constants/apiUrls.js";

export const booksService = {
  getBooks: async () => await api.get(apiUrls.books.getBooks),
  getBookById: async (id) => await api.get(`${apiUrls.books.getBooks}${id}`)
};
