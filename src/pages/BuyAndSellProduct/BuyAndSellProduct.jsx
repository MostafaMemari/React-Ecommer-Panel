import { createContext, useState, useEffect, useRef } from 'react';
import CardProducts from './components/CardProducts';
import Pagination from '../../components/Pagination';
import { getReportPurchaseProductsService, getReportSaleProductsService } from '../../services/Axios/Request/products';
import SearchBox from '../../components/SearchBox/SearchBox';
import ProductFilter from '../../components/ProductFIlter/ProductFilter';
import useProductData from '../../hooks/useProductData.';

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

  const [filters, setFilters] = useState({
    colorId: null,
    categoryId: null,
    sellerId: null,
    quantityMin: null,
    quantityMax: null,
    quantityOrder: null,
  });

  useEffect(() => {
    handleGetProducts(currentPage, countOnPage, searchChar, filters);
  }, [currentPage, countOnPage, searchChar, filters]);

  const searchBoxRef = useRef(null);

  const reloadProductsAndFocus = () => {
    setCurrentPage(1);
    handleGetProducts(1, countOnPage, '', filters);
    searchBoxRef.current?.clearAndFocusInput();
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-5">{pageType === 'buy' ? 'صفحه خرید محصول' : 'صفحه فروش محصول'}</h2>

      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <SearchBox
            ref={searchBoxRef}
            onSearch={(searchValue) => {
              setSearchChar(searchValue);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-2"></div>

      <ProductFilter onFilterChange={(newFilters) => setFilters(newFilters)} />

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
