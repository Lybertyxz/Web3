import React, { use } from "react";
import Link from "next/link";

interface CircleButtonProps {
  imageUrl: string;
  url: string;
  username: string;
}

const CirclePicture: React.FC<CircleButtonProps> = ({
  imageUrl,
  url,
  username,
}) => {
  if (imageUrl == "" || imageUrl == undefined) imageUrl = "/pp.jpg";
  if (username == "" || imageUrl == undefined) username = "John Doe";

  return (
    <Link className="inline-block" href={url}>
      <div className="flex h-auto w-24 flex-col items-center justify-center overflow-hidden rounded-full shadow-md hover:shadow-lg">
        <img
          src={imageUrl}
          alt="Profile Picture"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-2 text-center text-sm">{username}</div>
    </Link>
  );
};

export default CirclePicture;
