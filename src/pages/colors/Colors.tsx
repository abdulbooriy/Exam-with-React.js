import React from "react";
import { Button, Form, Input, Typography, type FormProps } from "antd";
import { useColor } from "../../api/features/hooks/useColor";
import type { IColor } from "../../shared/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";

const { Title } = Typography;

type FieldType = {
  id: string;
  name: string;
};

const Colors = () => {
  const { createColors, getColors, deleteColors } = useColor();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    createColors.mutate(values, {
      onSuccess: () => {
        toast.success("Color is successfully added !");
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteColors.mutate(id, {
      onSuccess: () => {
        toast.success("Color is successfully deleted!");
      },
      onError: () => {
        toast.error("An error occured while deleting the Color !");
      },
    });
  };

  return (
    <div>
      <Title
        style={{ color: "#427DC0", fontSize: "28px", fontWeight: "bold" }}
        level={3}>
        Manage Colors
      </Title>
      <div className="max-w-[500px] bg-white shadow p-6 rounded-2xl mt-10">
        <Title level={3}>
          Create Color
        </Title>
        <Form
          name="product-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          style={{ paddingTop: "10px" }}>
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input color name!" }]}>
            <Input placeholder="Color name" style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType>>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              style={{ height: "40px", fontSize: "18px" }}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="flex flex-wrap mt-[53px] gap-5">
        {getColors.data?.data?.map((color: IColor) => (
          <div key={color.id}>
            <div className="w-[250px] h-[60px] bg-[#FFFFFF] rounded-[5px] shadow p-4 flex justify-between">
              <h3 className="text-xl">{color?.name}</h3>
              <button
                onClick={() => handleDelete(color.id)}
                className="w-[55px] h-[33px] bg-[#427DC0] rounded-full cursor-pointer text-xl text-white flex justify-center items-center">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Colors);
