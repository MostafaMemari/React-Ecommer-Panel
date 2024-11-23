import _ from "lodash";
import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import ProductTable from "./components/ProductTable";
import { useFetchData } from "../../hooks/useFetchData";
import { Toast } from "../../base-components/Toast";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput from "../../base-components/SearchInput";
import DataSummary from "../../base-components/DataSummary/DataSummary";

import LoadingIcon from "../../base-components/LoadingIcon";
import { getTransactionsProductService } from "../../services/Axios/Request/transactions";

function Main() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  const { data, loading } = useFetchData(getTransactionsProductService, page, limit, search);

  useEffect(() => {
    if (!loading && !data?.data.products) {
      Toast("دریافت اطلاعات با خطا مواجه شد", "error");
    }
  }, [loading, data]);

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handleLimitChange = (newLimit: number) => setLimit(newLimit);
  const handleSearch = (searchValue: string) => setSearch(searchValue);

  const handleProductSubmission = () => {
    setPage(1);
  };

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, data?.data.pagination.totalCount || 0);
  const total = data?.data.pagination.totalCount || 0;

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">تراکنش ها</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          {(!loading && data?.data.products && <DataSummary start={start} end={end} total={total} />) || (
            <div className="hidden mx-auto md:block text-slate-500"></div>
          )}

          <SearchInput onSearch={handleSearch} />
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
              <ProductTable transactions={data?.data.products} onSuccess={handleProductSubmission} />
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
