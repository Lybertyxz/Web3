import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiService } from "../../utils/api";
import { Asset } from "../../utils/types";
import InfoCard from "../../components/InfoCard";
import PurchaseCard from "../../components/PurchaseCard";
import Carousel from "../../components/Carousel";

const AssetTest: Asset = {
  pictures_url: ["/asset1.jpg", "/asset2.jpg"],
  title: "Titre de l'asset",
  desc: "Description ici",
  city: "Ville ici",
  priceUSD: 1000,
  priceCurrency: 0.5,
  history: [
    { date: "2023-04-01", action: "Buy", priceUSD: 950, priceCurrency: 0.4 },
  ],
};

function AssetPage() {
  const router = useRouter();
  const { assetId } = router.query;
  const [asset, setAsset] = useState<Asset>();

  useEffect(() => {
    if (assetId) {
      const fetchData = async () => {
        try {
          const fetchedAsset = await apiService.assets.getAsset(
            assetId as string
          );
          setAsset(fetchedAsset);
        } catch (error) {
          console.error("Error fetching assets:", error.message);
        }
      };

      fetchData();
    }
    setAsset(AssetTest); // To remove
  }, [assetId]);

  if (!asset) return <p>Asset doesn't exist</p>;

  return (
    <div className="flex h-full">
      <div className="flex w-1/2 flex-col gap-4">
        <Carousel pictures={asset.pictures_url} />
        <InfoCard
          title={asset.title}
          description={asset.desc}
          city={asset.city}
        />
      </div>
      <div className="flex w-1/2 flex-col">
        <PurchaseCard
          assetId={assetId as string}
          priceUSD={asset.priceUSD.toString()}
          priceCrypto={asset.priceCurrency.toString()}
        />
      </div>
    </div>
  );
}

export default AssetPage;
