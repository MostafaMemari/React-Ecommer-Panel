import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import Table from "../../base-components/Table";

import { Toast } from "../../base-components/Toast";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput, { SearchInputHandle } from "../../base-components/SearchInput";
import DataSummary from "../../base-components/DataSummary/DataSummary";

import LoadingIcon from "../../base-components/LoadingIcon";
import ProductCard from "./components/ProductCard";
import { TransactionType } from "../../features/transaction/types/enym";

import usePagination from "../../hooks/usePagination";
import { FiltersProduct } from "../../features/product/types/type";
import Filters from "../../components/FiltersProduct";
import { usePurchaseProducts, useSaleProducts } from "../../features/product/hooks/useProducts";

interface MainProps {
  transactionType: TransactionType;
}

const Main: React.FC<MainProps> = ({ transactionType }) => {
  const { page, limit, search, updatePage, updateLimit, updateSearch } = usePagination();

  const searchInputRef = useRef<SearchInputHandle>(null);

  const [filters, setFilters] = useState<FiltersProduct>({});

  const { data, isLoading, isFetching, error, refetch } =
    transactionType === TransactionType.PURCHASE
      ? useSaleProducts({ page, limit, search, ...filters })
      : usePurchaseProducts({ page, limit, search, ...filters });

  useEffect(() => {
    refetch();
  }, [page, limit, search, filters]);

  useEffect(() => {
    if (error) {
      Toast("دریافت اطلاعات با خطا مواجه شد", "error");
    }
  }, [error]);

  const handleSearch = (searchValue: string) => {
    if (searchValue !== search) updateSearch(searchValue);
  };

  const handleFilterUpdate = (filterKey: keyof FiltersProduct, value: string | number) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  const handlePageChange = updatePage;
  const handleLimitChange = updateLimit;

  const resetSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.clearAndFocus();
    }
  };

  const handleProductSubmission = () => {
    if (search === "" && page === 1) {
      refetch();
    } else {
      updatePage(1);
    }
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <h2 className="text-lg font-medium intro-y">{transactionType === TransactionType.PURCHASE ? "خرید" : "فروش"} محصول</h2>

          {((!isLoading || !isFetching) && data?.products && <DataSummary pagination={data.pagination} />) || (
            <div className="hidden mx-auto md:block text-slate-500"></div>
          )}

          {/* <SearchInput searchType="enter" onSearch={handleSearch} /> */}
          <SearchInput ref={searchInputRef} searchType="change" debounceDelay={300} onSearch={handleSearch} />
        </div>
        <div className="col-span-12 intro-y">
          <Filters filters={filters} onFilterUpdate={handleFilterUpdate} />
        </div>

        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2 text-start">
            {isLoading || isFetching ? (
              <div className="flex items-center justify-center h-[300px]">
                <div className="flex flex-col items-center">
                  <LoadingIcon icon="puff" className="w-12 h-12" />
                  <div className="mt-2 text-sm text-center text-gray-500">در حال بارگذاری...</div>
                </div>
              </div>
            ) : data?.products ? (
              <ProductCard
                resetSearch={resetSearch}
                onSuccess={handleProductSubmission}
                products={data?.products}
                transactionType={transactionType}
              />
            ) : (
              <h2 className="text-center">هیچ محصولی یافت نشد</h2>
            )}
          </Table>
        </div>

        {isLoading || isFetching ? null : data?.pagination ? (
          <Pagination
            page={page}
            limit={limit}
            pageCount={data?.pagination.pageCount}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
          />
        ) : null}
      </div>
    </>
  );
};

export default Main;
