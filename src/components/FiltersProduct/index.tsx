import React from "react";
import { FiltersProduct } from "../../features/product/types/type";

import TomSelectCategory from "../../components/TomSelect";
import TomSelectColor from "../../components/TomSelect";
import TomSelectSeller from "../../components/TomSelect";
import { FormInput } from "../../base-components/Form";
import TomSelect from "../../base-components/TomSelect";

// **Types**
interface FiltersProps {
  filters: FiltersProduct;
  onFilterUpdate: (filterKey: keyof FiltersProduct, value: string | number) => void;
  loadingColor: boolean;
  loadingCategory: boolean;
  loadingSeller: boolean;
  colorOptions: any[];
  categoryOptions: any[];
  sellerOptions: any[];
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  onFilterUpdate,
  loadingColor,
  loadingCategory,
  loadingSeller,
  colorOptions,
  categoryOptions,
  sellerOptions,
}) => {
  return (
    <div className="grid grid-cols-12 gap-3">
      {loadingColor && loadingCategory && loadingSeller ? (
        <div className="mt-2 text-sm text-center text-gray-500">در حال بارگذاری...</div>
      ) : (
        <>
          <div className="col-span-12 md:col-span-4">
            <TomSelectColor
              loading={loadingColor}
              value={filters.colorId || "0"}
              onChange={(value) => onFilterUpdate("colorId", value)}
              options={colorOptions}
              placeholder="انتخاب رنگ"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <TomSelectCategory
              loading={loadingCategory}
              value={filters.categoryId || "0"}
              onChange={(value) => onFilterUpdate("categoryId", value)}
              options={categoryOptions}
              placeholder="انتخاب دسته‌بندی"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <TomSelectSeller
              loading={loadingSeller}
              value={filters.sellerId || "0"}
              onChange={(value) => onFilterUpdate("sellerId", value)}
              options={sellerOptions}
              placeholder="انتخاب فروشنده"
            />
          </div>
        </>
      )}

      <div className="col-span-6 md:col-span-3">
        <FormInput
          type="number"
          value={filters.minStock || ""}
          onChange={(e) => {
            const value: any = e.target.value;
            if (!isNaN(value) && Number(value) >= 0) {
              onFilterUpdate("minStock", Number(value));
            }
          }}
          placeholder="موجودی بیشتر از"
        />
      </div>

      <div className="col-span-6 md:col-span-3">
        <FormInput
          type="number"
          value={filters.maxStock || ""}
          onChange={(e) => {
            const value: any = e.target.value;
            if (!isNaN(value) && Number(value) >= 0) {
              onFilterUpdate("maxStock", Number(value));
            }
          }}
          placeholder="موجودی کمتر از"
        />
      </div>

      <div className="col-span-6 md:col-span-3">
        <TomSelect
          onChange={(value: "ASC" | "DESC") => onFilterUpdate("sortOrder", value)}
          value={filters.sortOrder || "0"}
          options={{ placeholder: "ترتیب موجودی" }}
          className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
        >
          <option value="ASC">صعودی</option>
          <option value="DESC">نزولی</option>
        </TomSelect>
      </div>

      <div className="col-span-6 md:col-span-3">
        <TomSelect
          onChange={(value: "ASC" | "DESC") => onFilterUpdate("updatedAt", value)}
          value={filters.updatedAt || "DESC"}
          options={{ placeholder: "آخرین تغییرات" }}
          className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
        >
          <option value="ASC">صعودی</option>
          <option value="DESC">نزولی</option>
        </TomSelect>
      </div>
    </div>
  );
};

export default Filters;
