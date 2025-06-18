import api from "../..";
import type { IColor } from "../../../shared/types";

export const getColors = api.get("/color");
export const createColor = (body: IColor) => api.post("/color", body);
export const deleteColor = (id: string) => api.delete(`/color/${id}`);
