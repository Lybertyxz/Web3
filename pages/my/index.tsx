import { useState, useEffect } from "react";
import { apiService } from "../../utils/api";
import AssetCard from "../../components/AssetCard";
import { Asset } from "../../utils/types";

const MyAssets: Asset[] = [
  {
    id: 1,
    title: "Asset 1",
    pictures_url: ["/asset1.jpg"],
    desc: "",
    priceUSD: 150650,
    priceCurrency: 15.5656,
  },
  {
    id: 2,
    title: "Asset 2",
    pictures_url: ["/asset2.jpg"],
    desc: "",
    priceUSD: 365214,
    priceCurrency: 24.11548,
  },
];

const MyAssetsPage = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAssets = await apiService.assets.getAssets();
        setAssets(fetchedAssets);
      } catch (error) {
        console.error("Error fetching assets:", error.message);
      }
      setAssets(MyAssets); // To Remove
    };

    fetchData();
  }, []);

  return (
    <div>
      {assets && assets.length > 0 ? (
        <div className="flex flex-wrap gap-6">
          {assets.map((asset, index) => (
            <AssetCard
              from="my"
              key={index}
              id={asset.id}
              image={asset.pictures_url[0]}
              title={asset.title}
              priceUSD={asset.priceUSD}
              priceCrypto={asset.priceCurrency}
            />
          ))}
        </div>
      ) : (
        <p className="flex h-screen items-center justify-center text-xl">
          No assets found
        </p>
      )}
    </div>
  );
};

export default MyAssetsPage;
