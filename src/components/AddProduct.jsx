"use client";
import { BsUpload } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../redux/slices/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();

  const initialProductData = {
    product_name: "",
    category: "",
    image: "",
    desc: "",
    image: null,
    variants: [],
  };

  const initialVariant = {
    variant_name: "",
    price: "",
    size: "",
  };

  const [formData, setFormData] = useState(initialProductData);
  const [newVariant, setNewVariant] = useState(initialVariant);
  const [variants, setVariants] = useState([]);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
    // setFormData({
    //   ...formData,
    //   image: selectedImage,
    // });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVariantChange = (e) => {
    setNewVariant({
      ...newVariant,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddVariant = () => {
    setVariants([...variants, newVariant]);
    setNewVariant(initialVariant);
  };

  const handleVariantEdit = (index, e) => {
    const updatedVariants = variants.map((variant, i) =>
      i === index ? { ...variant, [e.target.name]: e.target.value } : variant
    );
    setVariants(updatedVariants);
  };
  const handleDeleteVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setFormData({ ...formData, variants: variants, image: image });
  }, [variants, image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(addProduct(formData));
    setFormData(initialProductData);
    setNewVariant(initialVariant);
    setVariants([]);
    setImage([]);
  };

  return (
    <div>
      <div className="font-semi-bold text-xl mb-8">Product Details</div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="border p-4">
            {image ? (
              <label
                htmlFor="image"
                className="w-full h-full flex flex-col justify-between items-center"
              >
                <img
                  src={image}
                  alt=""
                  className="rounded-full h-40 w-40 object-cover shadow-md"
                />
                <span onClick={() => setImage(null)}>change</span>
              </label>
            ) : (
              <div className="w-full h-full flex flex-col justify-between items-center">
                <label htmlFor="image">
                  <BsUpload size={20} />{" "}
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  name="image"
                  className="hidden"
                />
                <div className="w-full flex flex-col justify-center items-center gap-5">
                  <label
                    htmlFor="image"
                    className="w-full text-gray-400 text-center  py-2 px-4 rounded-lg"
                  >
                    click here or Drop your file to upload it
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="product_name">Product Name</label>
            <Input
              name="product_name"
              id="product_name"
              required
              value={formData.product_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>

            <select
              className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
              name="category"
              id="category"
              required
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">select</option>
              {[
                "Beverages",
                "Food",
                "Household Items",
                "Electronics",
                "Clothing",
              ].map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="desc">Product Description</label>
            <textarea
              className="mt-2 w-full py-2 px-4 border border-gray-300"
              name="desc"
              id="desc"
              required
              value={formData.desc}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <div className="font-semi-bold text-lg">Product Variants</div>
            <div className="flex gap-4">
              <div>
                <label htmlFor="variant_name">Variant Name</label>
                <input
                  className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
                  name="variant_name"
                  id="variant_name"
                  value={newVariant.variant_name}
                  onChange={handleVariantChange}
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
                  name="price"
                  id="price"
                  type="number"
                  value={newVariant.price}
                  onChange={handleVariantChange}
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label htmlFor="size">Size</label>
                <input
                  className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
                  name="size"
                  id="size"
                  value={newVariant.size}
                  onChange={handleVariantChange}
                  placeholder="Enter size"
                />
              </div>
            </div>
            <div
              className="mt-2 px-4 py-2 text-green-500 cursor-pointer underline rounded"
              onClick={handleAddVariant}
            >
              Add Variant
            </div>
          </div>

          <div className="mt-4">
            {/* <div className="font-semi-bold text-lg">Variants</div> */}
            {variants.map((variant, index) => (
              <div key={index} className="flex gap-4 my-2">
                <div>
                  <label htmlFor={`variant_name_${index}`}>Variant Name</label>
                  <input
                    className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
                    name="variant_name"
                    id={`variant_name_${index}`}
                    placeholder="Enter name"
                    value={variant.variant_name}
                    onChange={(e) => handleVariantEdit(index, e)}
                  />
                </div>
                <div>
                  <label htmlFor={`price_${index}`}>Price</label>
                  <input
                    className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
                    name="price"
                    id={`price_${index}`}
                    value={variant.price}
                    type="number"
                    required
                    placeholder="Enter price"
                    onChange={(e) => handleVariantEdit(index, e)}
                  />
                </div>
                <div>
                  <label htmlFor={`size_${index}`}>Size</label>
                  <input
                    className="mt-2 w-full py-2 px-4 border border-gray-300 outline-none"
                    name="size"
                    id={`size_${index}`}
                    value={variant.size}
                    placeholder="Enter size"
                    onChange={(e) => handleVariantEdit(index, e)}
                  />
                </div>
                <div className="flex justify-end items-end">
                  <IconButton
                    className=""
                    variant="text"
                    onClick={() => handleDeleteVariant(index)}
                  >
                    <FiTrash size={25} className="text-red-500" />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end items-end border-t border-gray-300">
            <Button
              type="submit"
              color="green"
              size="lg"
              className="mt-4 px-12 py-4 bg-green-500  rounded-full"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
