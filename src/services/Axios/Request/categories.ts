import httpService from "../Configs/httpService";

//* Category Service
export const getCategoriesService = (): Promise<any> => {
  return httpService(`/categories`, "get");
};

export const createCategoryService = (values: { name: string }): Promise<any> => {
  return httpService(`/categories`, "post", { name: values.name });
};

export const removeCategoryService = (colorId: number): Promise<any> => {
  return httpService(`/categories/${colorId}`, "delete");
};

export const updateCategoryService = (colorId: number, values: { name: string }): Promise<any> => {
  return httpService(`/categories/${colorId}`, "put", { name: values.name });
};
