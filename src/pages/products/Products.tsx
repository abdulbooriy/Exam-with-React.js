import React from "react";
import { useProduct } from "../../api/features/hooks/useProduct";
import { Typography } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

const { Title } = Typography;

const Products = () => {
  const { getProducts, deleteProducts } = useProduct();

  const handleDelete = (id: string) => {
    deleteProducts.mutate(id, {
      onSuccess: () => {
        toast.success("Product is successfully deleted !");
      },
      onError: () => {
        toast.error("An error occured while deleting product !");
      },
    });
  };

  return (
    <section>
      <Title
        style={{ color: "#427DC0", fontSize: "28px", fontWeight: "bold" }}
        level={3}>
        Manage Products
      </Title>
      <div className="flex flex-wrap mt-[43px] gap-[32px]">
        {getProducts.data?.data.map((product: any) => (
          <div
            className="w-[326px] bg-[#FFFFFF] shadow rounded-xl p-4"
            key={product.id}>
            <div className="w-[300px] h-[300px]">
              <img
                className="w-full h-full rounded"
                src={product.image}
                alt={product.title}
              />
            </div>
            <h3 className="text-2xl mt-5">{product.title}</h3>
            <div className="flex mt-5 items-center justify-between">
              <strong className="text-xl text-[#427DC0]">
                {product.price} USD
              </strong>
              <div className="flex gap-2.5">
                <button className="w-[55px] h-[33px] border border-[#427DC0] rounded-full cursor-pointer text-xl text-[#427DC0] flex justify-center items-center">
                  <CiEdit />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="w-[55px] h-[33px] bg-[#427DC0] rounded-full cursor-pointer text-xl text-white flex justify-center items-center">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Products);
