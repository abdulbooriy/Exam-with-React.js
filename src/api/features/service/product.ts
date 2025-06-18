import api from "../..";

export const getProducts = () => api.get("/products");
export const createProducts = (body: any) => api.post("/products", body);
export const updateProducts = ({ id, body }: { id: string; body: any }) =>
  api.put(`/products/${id}`, body);
export const deleteProducts = (id: string) => api.delete(`/products/${id}`);
