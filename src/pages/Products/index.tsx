import _, { filter } from "lodash";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import ProductTable from "./components/ProductTable";

import { Toast } from "../../base-components/Toast";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput from "../../base-components/SearchInput";
import DataSummary from "../../base-components/DataSummary/DataSummary";

import LoadingIcon from "../../base-components/LoadingIcon";
import CreateAndUpdateProductModal from "../../components/ProductFormModal";
import usePagination from "../../hooks/usePagination";
import { FiltersProduct } from "../../features/product/types/type";

import Filters from "../../components/FiltersProduct";
import { useProducts } from "../../features/product/hooks/useProducts";

function Main() {
  const { page, limit, search, updatePage, updateLimit, updateSearch } = usePagination();
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [filters, setFilters] = useState<FiltersProduct>({});

  const { data, isLoading, isFetching, error, refetch } = useProducts({ page, limit, search, ...filters });

  useEffect(() => {
    updatePage(1);
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

  const handleProductSubmission = () => {
    updatePage(1);
  };
  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">لیست محصولات</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Button variant="primary" onClick={() => setIsOpenCreateModal(true)}>
            ثبت محصول جدید
          </Button>
          {isOpenCreateModal && (
            <CreateAndUpdateProductModal onSuccess={handleProductSubmission} onClose={() => setIsOpenCreateModal(false)} />
          )}

          {((!isLoading || !isFetching) && data?.products && <DataSummary pagination={data.pagination} />) || (
            <div className="hidden mx-auto md:block text-slate-500"></div>
          )}

          <SearchInput searchType="change" debounceDelay={300} onSearch={handleSearch} />
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
              <ProductTable products={data?.products} onSuccess={handleProductSubmission} />
            ) : (
              <h2 className="text-center">هیچ محصولی یافت نشد</h2>
            )}
          </Table>
        </div>

        {isLoading || isFetching ? null : data?.products ? (
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
}

export default Main;
