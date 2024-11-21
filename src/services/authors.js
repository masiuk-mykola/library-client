import api from "@utils/api.js";
import { apiUrls } from "@constants/apiUrls.js";

export const authorsService = {
  getAuthors: async () => await api.get(apiUrls.author.getAuthors),
  getAuthorById: async (id) =>
    await api.get(`${apiUrls.author.getAuthor}${id}`)
};
