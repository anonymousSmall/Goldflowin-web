import axios from "axios";

export const createArticle = async (token, form) => {
  // Code body
  return axios.post("https://goldflowin-api.vercel.app/api/article", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listarticle = async () => {
  // Code Body
  return axios.get("https://goldflowin-api.vercel.app/api/article");
};

export const removearticle = async (token, id) => {
  // Code Body
  return axios.delete("https://goldflowin-api.vercel.app/api/article/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
