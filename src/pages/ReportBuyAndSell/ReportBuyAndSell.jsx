import { useRef } from "react";
import Pagination from "../../components/Pagination";
import useProductData from "../../hooks/useProductData.";
import ModalButton from "../../components/Modal/ModalButton";
import AddProductModal from "../ManageProduct/components/AddProductModal";
import { getTransactionsProductService } from "../../services/Axios/Request/transactions";
import ProductTable from "./components/ProductTable";

function ManageProduct() {
  const {
    data,
    loading,
    searchChar,
    setSearchChar,
    currentPage,
    setCurrentPage,
    countOnPage,
    setCountOnPage,
    pageCount,
  } = useProductData(getTransactionsProductService);

  const searchInputRef = useRef(null);

  console.log(data);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchChar(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h2 className="intro-y text-lg font-medium mt-5">چینش لیست داده‌ای</h2>

      <div className="grid grid-cols-12 gap-6 mt-5 ">
        <div className="col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:mr-auto md:mr-0">
            <div className="w-56 relative text-gray-700 dark:text-gray-300">
              <input
                ref={searchInputRef}
                type="text"
                className="form-control w-56 box pl-10 placeholder-theme-13"
                placeholder="جستجو..."
                value={searchChar}
                onChange={handleSearchChange}
              />
              <i className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0" data-feather="search"></i>
            </div>
          </div>

          <div className="hidden md:block mx-auto text-gray-600">
            {loading
              ? "..."
              : `نمایش ${(currentPage - 1) * countOnPage + 1} تا ${Math.min(currentPage * countOnPage)} 
              از ${data?.pagination?.totalCount} داده`}
          </div>
          <ModalButton ModalComponent={AddProductModal} />
        </div>

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          {loading ? <h2 className="text-center">در حال بارگذاری...</h2> : <ProductTable products={data.products} />}
        </div>

        {loading ? (
          <></>
        ) : (
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            countOnPage={countOnPage}
            onPageChange={setCurrentPage}
            onCountChange={setCountOnPage}
          />
        )}
      </div>
    </div>
  );
}

export default ManageProduct;
