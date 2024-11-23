import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import { useFetchData } from "../../hooks/useFetchData";
import { getReportPurchaseProductsService } from "../../services/Axios/Request/products";
import { Toast } from "../../base-components/Toast";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput from "../../base-components/SearchInput";
import DataSummary from "../../base-components/DataSummary/DataSummary";

import LoadingIcon from "../../base-components/LoadingIcon";
import ProductCard from "./components/ProductCard";
import { TransactionType } from "../../features/transaction/types/enym";

interface MainProps {
  transactionType: TransactionType;
}

const Main: React.FC<MainProps> = ({ transactionType }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  const { data, loading, error, refetch } = useFetchData(getReportPurchaseProductsService, page, limit, search);

  useEffect(() => {
    if (!loading && !data?.data.products) {
      Toast("دریافت اطلاعات با خطا مواجه شد", "error");
    }
  }, [loading, data]);

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handleLimitChange = (newLimit: number) => setLimit(newLimit);
  const handleSearch = (searchValue: string) => setSearch(searchValue);

  const handleProductSubmission = () => {
    refetch();
  };

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, data?.data.pagination.totalCount || 0);
  const total = data?.data.pagination.totalCount || 0;

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">
        {transactionType === TransactionType.PURCHASE ? "خرید" : "فروش"} محصول
      </h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          {(!loading && data?.data.products && <DataSummary start={start} end={end} total={total} />) || (
            <div className="hidden mx-auto md:block text-slate-500"></div>
          )}

          <SearchInput searchType="enter" onSearch={handleSearch} />
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
