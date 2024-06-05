import { firmaVirtualApi } from "../apis";
import { Type } from "../interfaces";

export const getAllTypes = async (): Promise<Type[]> => {
  const { data } = await firmaVirtualApi.get<Type[]>(`/types`);
  return data;
};