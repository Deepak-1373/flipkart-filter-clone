import React from "react";

export const ProductCard = ({
  id,
  imageUrl,
  alt,
  brandName,
  productName,
  price,
  idealFor,
  sizes,
}) => {
  return (
    <div className="border">
      <img className="aspect-[1/2] w-full h-72" src={imageUrl} alt={alt} />
      <div className="p-2">
        <div>
          <span className="text-gray-500">{brandName}</span>
          <p className="line-clamp-1">{productName}</p>
        </div>
        <div className="flex justify-between">
          <p>₹{price}</p>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-500">Size: </span>
          {sizes.map((type, index) => (
            <span key={index}>{type.toUpperCase()}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  id: "",
  alt: "",
  price: 0,
  sizes: [],
  imageUrl: "",
  idealFor: "",
  brandName: "",
  productName: "",
};
