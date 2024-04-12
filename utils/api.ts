import { Asset } from "./types";

const BASE_URL = "http://localhost:8080";

async function fetchAPI(path: string, options?: RequestInit) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });
  const data = await res.json();
  return data;
}

export const apiService = {
  assets: {
    getAssets: () => fetchAPI("/assets"),
    getAsset: (id: string) => fetchAPI(`/assets/${id}`),
    getMyAssets: () => fetchAPI(`/assets/my`),
    getMyAsset: (id: string) => fetchAPI(`/assets/my/${id}`),
    createAsset: (asset: Asset) =>
      fetchAPI("/assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(asset),
      }),
    buyAsset: (id: string) => fetchAPI(`/assets/buy/${id}`),
    sellAsset: (id: string) => fetchAPI(`/assets/sell/${id}`),
  },
  account: {}, // "/account", "account/udpate", "/account/delete", "/account/settings"
  auth: {
    login: (email: string, password: string) =>
      fetchAPI("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }),
    register: (name: string, email: string, password: string) =>
      fetchAPI("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }),
  },
};
