import axios from "axios";

export const createProduct = async (token, form) => {
  //Code body
  return axios.post("https://goldflowin-api.vercel.app/api/product", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listProduct = async (token, count = 20) => {
  // Code body
  return axios.get("https://goldflowin-api.vercel.app/api/products/" + count, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export const readProduct = async (token, id) => {
  // Code body
  return axios.get("https://goldflowin-api.vercel.app/api/product/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const detailProducts = async (id) => {
  // Code body
  return axios.get("https://goldflowin-api.vercel.app/api/product/" + id);
};

export const deleteProduct = async (token, id) => {
  // Code body
  return axios.delete("https://goldflowin-api.vercel.app/api/product/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = async (token, id, form) => {
  // Code body
  return axios.put("https://goldflowin-api.vercel.app/api/product/" + id, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadFiles = async (token, form) => {
  //Code body
  return axios.post(
    "https://goldflowin-api.vercel.app/api/images",
    {
      image: form,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeFiles = async (token, public_id) => {
  // Code
  //console.log('form apu frontend', form)
  return axios.post(
    "https://goldflowin-api.vercel.app/api/removeimages",
    {
      public_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const searchFilters = async (arg) => {
  // Code body
  return axios.post("https://goldflowin-api.vercel.app/api/search/filters", arg);
};

export const listProductBy = async (sort, order, limit) => {
  // Code body
  return axios.post("https://goldflowin-api.vercel.app/api/productby", {
    sort,
    order,
    limit,
  });
};