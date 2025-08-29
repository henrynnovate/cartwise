"use client";

import { ProductType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCartIcon } from "lucide-react";

const ProductCard = ({ product }: { product: ProductType }) => {
  // state hooks
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFav, setIsFav] = useState(false);

  // safe image source fallback (in case images[selectedColor] is missing)
  const imageSrc =
    (selectedColor && product.images?.[selectedColor]) ??
    (product.images && Object.values(product.images)[0]) ??
    "";

  const isAddDisabled = product.sizes.length > 0 ? !selectedSize : false;

  return (
    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col bg-white hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-[2/3]">
        <Link href={`/products/${product.id}`}>
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Add to Fav (top-right) */}
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          type="button"
        >
          <Heart
            size={20}
            className={isFav ? "fill-red-500 stroke-red-500" : "stroke-gray-700"}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>

        {/* Options Row: controlled size select + color swatches */}
        {(product.sizes.length > 0 || product.colors.length > 0) && (
          <div className="flex items-center justify-between mb-3">
            {/* Controlled Size Dropdown */}
            {product.sizes.length > 0 && (
              <select
                aria-label="Select size"
                value={selectedSize ?? ""}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="" disabled>
                  Size
                </option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>
            )}

            {/* Color Swatches */}
            {product.colors.length > 0 && (
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
                      selectedColor === color ? "border-green-600" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color option ${color}`}
                    type="button"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer: price + add to cart (disabled if size required and not selected) */}
        <div className="mt-auto pt-3 border-t flex items-center justify-between">
          <span className="text-2xl font-bold text-black">${product.price.toFixed(2)}</span>

          <button
            type="button"
            disabled={isAddDisabled}
            className={`flex flex-row items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${
              isAddDisabled
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-black  hover:bg-black text-white"
            }`}
            aria-disabled={isAddDisabled}
          >
            <ShoppingCartIcon className="w-5 h-5 "/>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
