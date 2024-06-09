"use client";
import React, { useState } from "react";
import { Button, Checkbox, Input, Radio } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { addOrder } from "../redux/slices/orderSlice";

const Payments = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);
  const initial = {
    name: "",
    phone: "",
    delivery: "Delivery",
  };

  const [formData, setFormData] = useState(initial);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function convertToLocalDateTime(isoString) {
    let date = new Date(isoString);
    return date.toLocaleString();
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let orders = items.map((obj) => {
      return {
        ...obj,
        ...formData,
        date: convertToLocalDateTime(new Date().toISOString()),
      };
    });

    orders.forEach((order) => {
      console.log(order);
      dispatch(addOrder(order));
    });

    // setFormData(initial);
    // handleClearCart();
  };

  return (
    <div className="p-4">
      <div className="my-4 text-xl font-bold">Payments Details</div>
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone"> Phone</label>
            <Input
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <div htmlFor="payment"> Select Payment method</div>
            <Radio color="green" name="payment" label="Momo" defaultChecked />
            <Radio color="green" name="payment" label="Card" />
            <Radio color="green" name="payment" label="Cash on delivery" />
          </div>
          <div>
            <Checkbox
              color="green"
              name="payment"
              label="Is your Momo number the same as your phone number?"
              defaultChecked
            />
          </div>
          <div>
            <label htmlFor="phone2"> Phone number</label>
            <Input
              name="phone2"
              id="phone2"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="text-xl font-bold">Delivery Details</div>
          <div>
            <div htmlFor="payment">Select delivery option</div>
            <Radio
              color="green"
              name="delivery"
              label="Delivery"
              defaultChecked
            />
            <Radio color="green" name="delivery" label="Pick-up" />
          </div>
          <div className="p-4 flex justify-between items-center bg-yellow-100">
            <div>
              <p className="text-sm text-gray-500">Delivery location</p>
              <h1 className="font-semibold">Circle</h1>
            </div>
            <div className="text-sm text-gray-500">change </div>
          </div>
          <div className="py-8 border-t">
            <Button
              disabled={items.length === 0}
              className="w-full"
              type="submit"
              color="green"
              size="lg"
            >
              Continue to Pay
            </Button>
          </div>
        </div>{" "}
      </form>
    </div>
  );
};

export default Payments;
