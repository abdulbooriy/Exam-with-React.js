import React from "react";
import { Typography, Button, Form, Input, Select } from "antd";
import type { FormProps } from "antd";
import { useColor } from "../../api/features/hooks/useColor";
import type { IColor } from "../../shared/types";
import { Option } from "antd/es/mentions";
import { useProduct } from "../../api/features/hooks/useProduct";
import toast from "react-hot-toast";

const { Title } = Typography;

type FieldType = {
  title?: string;
  price?: number;
  color?: string;
  image?: string;
  description?: string;
};

const CreateProducts = () => {
  const [form] = Form.useForm();
  const { getColors } = useColor();
  const { createProducts } = useProduct();
  const { mutate, isPending } = createProducts;

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Product is successfully added !");
        form.resetFields();
      },
      onError: () => {
        toast.error("An error occured while creating product !");
      },
    });
  };
  return (
    <div className="p-5">
      <Title
        style={{ color: "#427DC0", fontSize: "28px", fontWeight: "bold" }}
        level={3}>
        Manage Create Products
      </Title>
      <div className="max-w-[550px] bg-white shadow p-6 rounded-2xl mt-5 mx-auto">
        <Title level={3}>Create Product</Title>
        <Form
          form={form}
          name="product-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          style={{ paddingTop: "10px" }}>
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please input product title!" },
            ]}>
            <Input placeholder="Product title" style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price!" }]}>
            <Input
              type="number"
              placeholder="Price"
              style={{ height: "40px" }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Image URL"
            name="image"
            rules={[{ required: true, message: "Please input image url!" }]}>
            <Input placeholder="Image URL" style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Color"
            name="color"
            rules={[{ required: true, message: "Please select colors!" }]}>
            <Select
              placeholder="Select product colors"
              style={{ height: "40px" }}>
              {getColors.data?.data.map((color: IColor) => (
                <Option key={color.id}>{color.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description!" }]}>
            <Input.TextArea
              placeholder="Enter product description"
              style={{ height: "120px" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isPending}
              type="primary"
              htmlType="submit"
              className="w-full"
              style={{ height: "40px", fontSize: "18px" }}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(CreateProducts);
