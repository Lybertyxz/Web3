import { FormEvent, useState } from "react";
import { apiService } from "../../utils/api";
import { Asset } from "../../utils/types";

function CreateAssetPage() {
  const [asset, setAsset] = useState<Asset>({ title: "", desc: "" });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await apiService.assets.createAsset(asset);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <input
        type="text"
        value={asset.title}
        onChange={(e) => setAsset({ ...asset, title: e.target.value })}
        placeholder="Title"
        className="input-class text-black"
      />
      <textarea
        value={asset.desc}
        onChange={(e) => setAsset({ ...asset, desc: e.target.value })}
        placeholder="Description"
        className="textarea-class text-black"
      />
      <button type="submit" className="button-class">
        Create Asset
      </button>
    </form>
  );
}

export default CreateAssetPage;
