import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SimpleMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SimpleMenuState = {
  menu: [
    {
      icon: "Box",
      title: "Menu Layout",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/",
          title: "Side Menu",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/simple-menu/dashboard-overview-1",
          title: "Simple Menu",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/top-menu/dashboard-overview-1",
          title: "Top Menu",
          ignore: true,
        },
      ],
    },
    {
      icon: "ShoppingCart",
      title: "محصولات",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/products",
          title: "مدیریت",
        },
        {
          icon: "Activity",
          pathname: "/products-robot",
          title: "ربات",
        },
      ],
    },
    {
      icon: "ShoppingBag",
      title: "تراکنش ها",
      pathname: "/products/transactions",
    },
    {
      icon: "Droplet",
      title: "رنگ",
      pathname: "/colors",
    },
    {
      icon: "ShoppingBag",
      title: "دسته بندی",
      pathname: "/categories",
    },
    {
      icon: "Users",
      title: "فروشنده",
      pathname: "/sellers",
    },
  ],
};

export const simpleMenuSlice = createSlice({
  name: "simpleMenu",
  initialState,
  reducers: {},
});

export const selectSimpleMenu = (state: RootState) => state.simpleMenu.menu;

export default simpleMenuSlice.reducer;
