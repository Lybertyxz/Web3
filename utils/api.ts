const BASE_URL = "http://localhost:8000";

async function fetchAPI(
  path: string,
  options?: RequestInit,
  json: boolean = true
) {
  const token = localStorage.getItem("token");

  const headers = new Headers(options?.headers);

  if (json && !(options?.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  return data;
}

export const apiService = {
  assets: {
    getAssets: () => fetchAPI("/assets/"),
    getAsset: (id: string) => fetchAPI(`/assets/${id}`),
    getMyAssets: () => fetchAPI(`/assets/my`),
    getMyAsset: (id: string) => fetchAPI(`/assets/my/${id}`),
    createAsset: (asset: FormData) =>
      fetchAPI(
        "/assets/",
        {
          method: "POST",
          body: asset,
        },
        false
      ),
    buyAsset: (id: string) => fetchAPI(`/assets/buy/${id}`),
    sellAsset: (id: string) => fetchAPI(`/assets/sell/${id}`),
  },
  account: {
    getProfile: () => fetchAPI(`/account`),
    updateProfile: (username: string, email: string, description: string) =>
      fetchAPI(`/account/`, {
        method: "POST",
        body: JSON.stringify({ username, email, description }),
      }),
  },
  auth: {
    login: (email: string, password: string) =>
      fetchAPI("/login/", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),
      register: (email: string, password: string, username: string) =>
          fetchAPI("/register/", {
        method: "POST",
            body: JSON.stringify({ email, password, username }),
          }),
  },
};
