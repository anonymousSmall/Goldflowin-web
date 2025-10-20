import axios from "axios";

export const currentUser = async (token) =>
  awaxios.post(
    "https://goldflowin-api.vercel.app/api/current-user",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const currentAdmin = async (token) => {
  return await axios.post(
    "https://goldflowin-api.vercel.app/api/current-admin",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};