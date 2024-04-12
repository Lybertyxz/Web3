import React, { FormEvent, useState } from "react";
import { apiService } from "../../utils/api";
import { Asset } from "../../utils/types";

function CreateAssetPage() {
  const [asset, setAsset] = useState<Asset>({
    title: "",
    desc: "",
    pictures: [],
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setAsset({ ...asset, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files).slice(0, 5);
      setAsset({ ...asset, pictures: fileList });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", asset.title);
    formData.append("desc", asset.desc);
    asset.pictures.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
    try {
      await apiService.assets.createAsset(formData);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="flex w-1/3 justify-center rounded-md bg-[#2b2b2b] p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={asset.title}
            onChange={handleInputChange}
            className="m-1 flex w-full rounded-md bg-white px-3 py-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            value={asset.desc}
            onChange={handleInputChange}
            rows={1}
            className="mt-1 flex w-full rounded-md bg-white px-3 py-2 text-black"
          />
        </div>

        <input
          type="file"
          name="pictures"
          id="images"
          multiple
          onChange={handleImageChange}
          className="mt-1 w-full text-white file:mr-4 file:rounded-full file:border-0 file:bg-purple-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
        />

        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium  shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Asset
        </button>
      </form>
    </div>
  );
}

export default CreateAssetPage;
