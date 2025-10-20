import axios from "axios";

export const createBrand = async (token, form) => {
  // Code Body
  return axios.post("https://goldflowin-api.vercel.app/api/brand", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listBrand = async () => {
  // Code Body
  return axios.get("https://goldflowin-api.vercel.app/api/brand");
};

export const removeBrand = async (token, id) => {
  // Code Body
  return axios.delete("https://goldflowin-api.vercel.app/api/brand/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

