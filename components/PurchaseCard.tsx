import React, { FormEvent } from "react";
import { apiService } from "../utils/api";
import { useRouter } from "next/router";

interface PurchaseCardProps {
  assetId: string;
  priceUSD: string;
  priceCrypto: string;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({
  assetId,
  priceUSD,
  priceCrypto,
}) => {
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const buyAsset = async () => {
      try {
        await apiService.assets.buyAsset(assetId as string);
        router.push(`/my/${assetId}`);
      } catch (error) {
        console.error("Error buying asset:", error.message);
      }
    };

    buyAsset();
    router.push(`/my/${assetId}`); // to Remove
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
        Buy now
      </button>
    </form>
  );
};

export default PurchaseCard;
