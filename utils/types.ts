export interface Asset {
  id?: number;
  title?: string;
  desc?: string;
  pictures?: string[];
  priceUSD?: number;
  priceCurrency?: number;
}

export interface User {
  id?: number;
  username?: string;
  imageUrl?: string;
  description?: string;
  assets?: Asset[];
}
