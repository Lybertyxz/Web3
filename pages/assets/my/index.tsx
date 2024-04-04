import { useState, useEffect } from "react";
import { apiService } from "../../../utils/api";
import AssetCard from "../../../components/AssetCard";
import { Asset } from "../../../utils/types";

// const assetData: Asset[] = [
//   {
//     title: "titre",
//     desc: "description",
//   },
//   {
//     title: "titre2",
//     desc: "description",
//   },
//   {
//     title: "titre3",
//     desc: "description",
//   },
//   {
//     title: "titre4",
//     desc: "description",
//   },
//   {
//     title: "titre5",
//     desc: "description",
//   },
// ];

const MyAssetsPage = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAssets = await apiService.assets.getMyAssets();
        setAssets(fetchedAssets);
      } catch (error) {
        console.error("Error fetching assets:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {assets.length > 0 ? (
        <div className="grid gap-3 p-4">
          {assets.map((asset) => (
            <div key={asset.ID}>
              <AssetCard
                id={asset.ID.toString()}
                title={asset.title}
                desc={asset.desc}
              />
            </div>
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
