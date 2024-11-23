import httpService from "../Configs/httpService";

//* Category Service
export const getColorsService = (): Promise<any> => {
  return httpService(`/colors`, "get");
};

export const createColorsService = (values: { name: string }): Promise<any> => {
  return httpService(`/colors`, "post", { name: values.name });
};

export const removeColorService = (colorId: number): Promise<any> => {
  return httpService(`/colors/${colorId}`, "delete");
};

export const updateColorService = (colorId: number, values: { name: string }): Promise<any> => {
  return httpService(`/colors/${colorId}`, "put", { name: values.name });
};
