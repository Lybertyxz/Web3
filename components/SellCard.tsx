import React, { FormEvent } from "react";
import { apiService } from "../utils/api";
import { useRouter } from "next/router";

interface SellCardProps {
  assetId: string;
  priceUSD: string;
  priceCrypto: string;
}

const SellCard: React.FC<SellCardProps> = ({
  assetId,
  priceUSD,
  priceCrypto,
}) => {
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sellAsset = async () => {
      try {
        await apiService.assets.sellAsset(assetId as string);
        router.push("/marketplace");
      } catch (error) {
        console.error("Error selling asset:", error.message);
      }
    };

    sellAsset();
    router.push("/marketplace"); // to Remove
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-2/3 rounded-lg bg-[#2b2b2b] p-4 text-center shadow-md"
    >
      <h3 className="text-xl font-bold">Price</h3>
      <p className="my-2 text-3xl font-bold text-indigo-400">
        {priceUSD} $ USD
      </p>
      <p className="">{priceCrypto} XRP</p>
      <button
        type="submit"
        className="mt-4 rounded bg-indigo-600 px-4 py-2 font-bold  hover:bg-indigo-500"
      >
        Sell now
      </button>
    </form>
  );
};

export default SellCard;
