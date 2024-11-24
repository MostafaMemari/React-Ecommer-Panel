import _, { filter } from "lodash";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import ProductTable from "./components/ProductTable";
import { useFetchData } from "../../hooks/useFetchData";
import { getProductsService } from "../../services/Axios/Request/products";
import { Toast } from "../../base-components/Toast";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput from "../../base-components/SearchInput";
import DataSummary from "../../base-components/DataSummary/DataSummary";

import LoadingIcon from "../../base-components/LoadingIcon";
import CreateAndUpdateProductModal from "../../components/ProductFormModal";
import usePagination from "../../hooks/usePagination";
import { FiltersProduct } from "../../features/product/types/type";
import TomSelect from "../../base-components/TomSelect";
import useOptionsData from "../../hooks/useOptionsData";
import { getCategoriesService } from "../../services/Axios/Request/categories";
import { getColorsService } from "../../services/Axios/Request/colors";
import { getSellersService } from "../../services/Axios/Request/sellers";

import TomSelectCategory from "../../components/TomSelect";
import TomSelectColor from "../../components/TomSelect";
import TomSelectSeller from "../../components/TomSelect";
import { FormInput } from "../../base-components/Form";

function Main() {
  const { page, limit, search, updatePage, updateLimit, updateSearch } = usePagination();

  const [filters, setFilters] = useState<FiltersProduct>({});

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const { data, loading, error, refetch } = useFetchData(getProductsService, [page, limit, search]);
  const { options: categoryOptions, loading: loadingCategory } = useOptionsData(getCategoriesService);
  const { options: colorOptions, loading: loadingColor } = useOptionsData(getColorsService);
  const { options: sellerOptions, loading: loadingSeller } = useOptionsData(getSellersService);

  useEffect(() => {
    if (!loading && !data?.data.products) {
      Toast("دریافت اطلاعات با خطا مواجه شد", "error");
    }
  }, [loading, data]);

  const handlePageChange = (newPage: number) => {
    updatePage(newPage);
    refetch([newPage, limit, search, filters]);
  };
  const handleLimitChange = (newLimit: number) => {
    updateLimit(newLimit);
    refetch([1, newLimit, search, filters]);
  };
  const handleSearch = (searchValue: string) => {
    if (searchValue === search) return;
    updateSearch(searchValue);
    refetch([1, limit, searchValue, filters]);
  };

  const handleFilterUpdate = (filterKey: keyof FiltersProduct, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterKey]: value }));
    refetch([page, limit, search, { ...filters, [filterKey]: value }]);
  };

  const handleProductSubmission = () => {
    refetch();
  };

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, data?.data.pagination.totalCount || 0);
  const total = data?.data.pagination.totalCount || 0;

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">لیست محصولات</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Button variant="primary" onClick={() => setIsOpenCreateModal(true)}>
            ثبت محصول جدید
          </Button>
          {isOpenCreateModal && (
            <CreateAndUpdateProductModal
              onSuccess={handleProductSubmission}
              onClose={() => setIsOpenCreateModal(false)}
            />
          )}

          {(!loading && data?.data.products && <DataSummary start={start} end={end} total={total} />) || (
            <div className="hidden mx-auto md:block text-slate-500"></div>
          )}

          <SearchInput searchType="change" debounceDelay={300} onSearch={handleSearch} />
        </div>

        <div className="flex flex-col sm:flex-row items-center col-span-12 justify-between gap-3 intro-y sm:flex-nowrap">
          <TomSelectColor
            loading={loadingColor}
            value={filters.colorId || "0"}
            onChange={(value) => handleFilterUpdate("colorId", value)}
            options={colorOptions}
            placeholder="انتخاب رنگ"
          />

          <TomSelectCategory
            loading={loadingCategory}
            value={filters.categoryId || "0"}
            onChange={(value) => handleFilterUpdate("categoryId", value)}
            options={categoryOptions}
            placeholder="انتخاب دسته‌بندی"
          />

          <TomSelectSeller
            loading={loadingSeller}
            value={filters.sellerId || "0"}
            onChange={(value) => handleFilterUpdate("sellerId", value)}
            options={sellerOptions}
            placeholder="انتخاب فروشنده"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center col-span-12 justify-between gap-3 intro-y sm:flex-nowrap">
          <FormInput
            onChange={(e) => handleFilterUpdate("maxStock", e.target.value)}
            type="number"
            placeholder="موجودی کمتر از"
          />
          <FormInput
            onChange={(e) => handleFilterUpdate("minStock", e.target.value)}
            type="number"
            placeholder="موجودی بیشتر از"
          />

          <TomSelect
            onChange={(value: "ASC" | "DESC") => handleFilterUpdate("sortOrder", value)}
            value={filters.sortOrder || "0"}
            options={{ placeholder: "ترتیب موجودی" }}
            className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
          >
            <option value="ASC">صعودی</option>
            <option value="DESC">نزولی</option>
          </TomSelect>
          <TomSelect
            onChange={(value: "ASC" | "DESC") => handleFilterUpdate("updatedAt", value)}
            value={filters.updatedAt || "DESC"}
            options={{ placeholder: "آخرین تغییرات" }}
            className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
          >
            <option value="ASC">صعودی</option>
            <option value="DESC">نزولی</option>
          </TomSelect>
        </div>

        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2 text-start">
            {loading ? (
              <div className="flex items-center justify-center h-[300px]">
                <div className="flex flex-col items-center">
                  <LoadingIcon icon="puff" className="w-12 h-12" />
                  <div className="mt-2 text-sm text-center text-gray-500">در حال بارگذاری...</div>
                </div>
              </div>
            ) : data?.data.products ? (
              <ProductTable products={data?.data.products} onSuccess={handleProductSubmission} />
            ) : (
              <h2 className="text-center">هیچ محصولی یافت نشد</h2>
            )}
          </Table>
        </div>

        {loading ? null : data?.data.pagination ? (
          <Pagination
            page={page}
            limit={limit}
            pageCount={data?.data.pagination.pageCount}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
          />
        ) : null}
      </div>
    </>
  );
}

export default Main;
