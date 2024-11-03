import { createContext, useRef } from 'react';
import CardProducts from './components/CardProducts';
import useProductData from '../../hooks/useProductData.';
import Pagination from '../../components/Pagination';
import { getReportPurchaseProductsService, getReportSaleProductsService } from '../../services/Axios/Request/products';

export const ProductContext = createContext();

function BuyAndSellProduct({ pageType }) {
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
    handleGetProducts,
  } = useProductData(pageType === 'buy' ? getReportPurchaseProductsService : getReportSaleProductsService);

  const searchInputRef = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchChar(value);
    setCurrentPage(1);
  };

  const reloadProductsAndFocus = async () => {
    setCurrentPage(1);
    setSearchChar('');
    await handleGetProducts(currentPage, countOnPage, searchChar);
    searchInputRef.current.focus();
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-5">{pageType === 'buy' ? 'صفحه خرید محصول' : 'صفحه فروش محصول'}</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
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
              ? '...'
              : `نمایش ${(currentPage - 1) * countOnPage + 1} تا ${Math.min(currentPage * countOnPage)}
              از ${data?.pagination?.totalCount} داده`}
          </div>

          <button className="btn btn-primary shadow-md ml-2">افزودن محصول جدید</button>
        </div>
      </div>

      {loading ? (
        <h2 className="text-center">در حال بارگذاری...</h2>
      ) : (
        <ProductContext.Provider value={{ pageType, reloadProductsAndFocus }}>
          <CardProducts products={data.products} />
        </ProductContext.Provider>
      )}

      {!loading && (
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          countOnPage={countOnPage}
          onPageChange={setCurrentPage}
          onCountChange={setCountOnPage}
        />
      )}
    </>
  );
}
export default BuyAndSellProduct;
