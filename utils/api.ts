import { Asset } from "./types";

const BASE_URL = "http://localhost:8080";

async function fetchAPI(path: string, options?: RequestInit) {
  const res = await fetch(`${BASE_URL}${path}`, options);
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
        method: "asset",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(asset),
      }),
  },
  users: {},
};
