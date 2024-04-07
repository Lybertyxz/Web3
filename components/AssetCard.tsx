import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AssetCardProps {
  from: "marketplace" | "my";
  id: number;
  image: string;
  title: string;
  priceUSD: number;
  priceCrypto: number;
}

const AssetCard: React.FC<AssetCardProps> = ({
  from,
  id,
  image,
  title,
  priceUSD,
  priceCrypto,
}) => {
  return (
    <Link href={`/${from}/` + id.toString()}>
      <div className="w-64 overflow-hidden rounded-md bg-neutral-800 shadow-md transition-transform hover:scale-105">
        <motion.div
          className="relative h-40 overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </motion.div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-500">
                {priceCrypto.toLocaleString()} ETH
              </p>
              <p className="text-purple-500">
                Equivalent: {priceUSD.toLocaleString()} $
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AssetCard;
