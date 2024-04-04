import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiService } from "../../utils/api";
import { Asset } from "../../utils/types";

function MyAssetPage() {
  const router = useRouter();
  const { assetId } = router.query;
  const [asset, setAsset] = useState<Asset>();

  useEffect(() => {
    if (assetId) {
      const fetchData = async () => {
        try {
          const fetchedAsset = await apiService.assets.getMyAsset(
            assetId as string
          );
          setAsset(fetchedAsset);
        } catch (error) {
          console.error("Error fetching assets:", error.message);
        }
      };

      fetchData();
    }
  }, [assetId]);

  if (!asset) return <p>Loading...</p>;

  return (
    <div>
      <h1>{asset.title}</h1>
      <p>{asset.desc}</p>
    </div>
  );
}

export default MyAssetPage;
