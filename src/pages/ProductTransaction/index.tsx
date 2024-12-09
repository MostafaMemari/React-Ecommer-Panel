import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import Table from "../../base-components/Table";
import { useFetchData } from "../../hooks/useFetchData";
import { getReportPurchaseProductsService, getReportSaleProductsService } from "../../services/Axios/Request/products";
import { Toast } from "../../base-components/Toast";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput, { SearchInputHandle } from "../../base-components/SearchInput";
import DataSummary from "../../base-components/DataSummary/DataSummary";

import LoadingIcon from "../../base-components/LoadingIcon";
import ProductCard from "./components/ProductCard";
import { TransactionType } from "../../features/transaction/types/enym";

import { getCategoriesService } from "../../services/Axios/Request/categories";
import { getColorsService } from "../../services/Axios/Request/colors";
import { getSellersService } from "../../services/Axios/Request/sellers";
import useOptionsData from "../../hooks/useOptionsData";
import usePagination from "../../hooks/usePagination";
import { FiltersProduct } from "../../features/product/types/type";
import Filters from "../../components/FiltersProduct";

interface MainProps {
  transactionType: TransactionType;
}

const Main: React.FC<MainProps> = ({ transactionType }) => {
  const { page, limit, search, updatePage, updateLimit, updateSearch } = usePagination();

  const searchInputRef = useRef<SearchInputHandle>(null);

  const [filters, setFilters] = useState<FiltersProduct>({});

  const { data, loading, error, refetch } = useFetchData(
    transactionType === TransactionType.PURCHASE ? getReportPurchaseProductsService : getReportSaleProductsService,
    [page, limit, search],
    false
  );

  const { options: categoryOptions, loading: loadingCategory } = useOptionsData(getCategoriesService);
  const { options: colorOptions, loading: loadingColor } = useOptionsData(getColorsService);
  const { options: sellerOptions, loading: loadingSeller } = useOptionsData(getSellersService);

  const handleFilterUpdate = (filterKey: keyof FiltersProduct, value: string | number) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterKey]: value }));
    refetch([page, limit, search, { ...filters, [filterKey]: value }]);
  };

  useEffect(() => {
    console.log("use effect");
    refetch([page, limit, search, filters]);
  }, []);

  useEffect(() => {
    if (error) {
      Toast("دریافت اطلاعات با خطا مواجه شد", "error");
    }
  }, [loading, data]);

  const handlePageChange = (newPage: number) => {
    updatePage(newPage);
    refetch([newPage, limit, search, filters]);
  };
  const handleLimitChange = (newLimit: number) => {
    updateLimit(newLimit);
    refetch([page, newLimit, search, filters]);
  };
  const handleSearch = (searchValue: string) => {
    if (searchValue === search) return;
    updateSearch(searchValue);
    refetch([page, limit, searchValue, filters]);
  };

  const resetSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.clearAndFocus();
    }
  };

  const handleProductSubmission = () => {
    updatePage(1);
  };

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, data?.data.pagination.totalCount || 0);
  const total = data?.data.pagination.totalCount || 0;

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <h2 className="text-lg font-medium intro-y">
            {transactionType === TransactionType.PURCHASE ? "خرید" : "فروش"} محصول
          </h2>

          {(!loading && data?.data.products && <DataSummary start={start} end={end} total={total} />) || (
            <div className="hidden mx-auto md:block text-slate-500"></div>
          )}

          {/* <SearchInput searchType="enter" onSearch={handleSearch} /> */}
          <SearchInput ref={searchInputRef} searchType="change" debounceDelay={300} onSearch={handleSearch} />
        </div>
        <div className="col-span-12 intro-y">
          <Filters
            filters={filters}
            onFilterUpdate={handleFilterUpdate}
            loadingColor={loadingColor}
            loadingCategory={loadingCategory}
            loadingSeller={loadingSeller}
            colorOptions={colorOptions}
            categoryOptions={categoryOptions}
            sellerOptions={sellerOptions}
          />
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
              <ProductCard
                resetSearch={resetSearch}
                onSuccess={handleProductSubmission}
                products={data?.data.products}
                transactionType={transactionType}
              />
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
};

export default Main;
