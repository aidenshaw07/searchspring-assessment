import React from "react";

export const CartItem = ({ item }) => {
  return (
    <div>
      <img src={item.thumbnailImageUrl} alt={item.name} />
      {item.name}
      {item.msrp > item.price ? (
        <>
          <div style={{ textDecoration: "line-through" }}>{item.msrp}</div>
          <div>{item.price}</div>
        </>
      ) : (
        <>{item.price}</>
      )}
    </div>
  );
};
