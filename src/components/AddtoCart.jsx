import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
} from "../redux/slices/cartSlice";
import { Button } from "@material-tailwind/react";

const AddtoCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const products = useSelector((state) => state.products.items);

  const handleRemoveFromCart = (id, price) => {
    dispatch(removeFromCart({ id, price }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="border-y-2 p-4">
        <h1>Product List</h1>
        <div className="">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <button onClick={handleClearCart}>Clear</button>
      </div>

      <div className="flex justify-between items-center py-4 border-t-2 p-4">
        <div>
          <p>total</p>
          {totalAmount}
          {/* {totalAmount?.toFixed(2)} */}
        </div>
        <Button color="green" size="lg">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default AddtoCart;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        price: product.variants[0].price,
        size: product.variants[0].size,
      })
    );
  };
  const handleRemoveFromCart = (id, price) => {
    dispatch(removeFromCart({ id, price }));
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="p-4">{product?.product_name}</div>
      <div className="p-4">{product.variants[0]?.size}</div>
      <div className="p-4">GHS{product.variants[0]?.price}</div>
      <div className="flex gap-2 p-4">
        <button onClick={handleAddToCart}>+</button> <p>{totalQuantity}</p>
        <button onClick={() => handleRemoveFromCart(product.id, product.price)}>
          -
        </button>
      </div>
    </div>
  );
};
