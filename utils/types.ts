export interface Asset {
  id?: number;
  title?: string;
  desc?: string;
  city?: string;
  pictures_url?: string[];
  pictures?: File[];
  priceUSD?: number;
  priceCurrency?: number;
  history?: History[];
}

export interface History {
  date: string;
  action: "Buy" | "Sell";
  priceUSD: number;
  priceCurrency: number;
}
export interface User {
  id?: number;
  username?: string;
  email?: string;
  imageUrl?: string;
  description?: string;
  assets?: Asset[];
  walletBalance?: number;
  walletAddress?: string;
}
