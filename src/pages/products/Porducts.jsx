import React, { useState, useEffect } from 'react';
import TableProducts from './TableProducts';
import { getProductsService } from '../../services/Axios/Request/products';
import Pagination from '../../components/Pagination/Pagination';

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const handleGetProducts = async (page, count, char) => {
    setLoading(true);
    const res = await getProductsService(page, count, char);
    setLoading(false);
    if (res.status === 200) {
      setData(res.data);
      setPageCount(res.data.pagination.pageCount);
      console.log(res.data.products);
    }
  };

  useEffect(() => {
    handleGetProducts(currentPage, countOnPage, searchChar);
  }, [currentPage, countOnPage, searchChar]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchChar(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h2 className="intro-y text-lg font-medium mt-5">چینش لیست داده‌ای</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button className="btn btn-primary shadow-md ml-2">افزودن محصول جدید</button>

          <div className="hidden md:block mx-auto text-gray-600">
            {loading
              ? '...'
              : `نمایش ${(currentPage - 1) * countOnPage + 1} تا ${Math.min(currentPage * countOnPage)} 
              از ${data?.pagination?.totalCount} داده`}
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:mr-auto md:mr-0">
            <div className="w-56 relative text-gray-700 dark:text-gray-300">
              <input
                type="text"
                className="form-control w-56 box pl-10 placeholder-theme-13"
                placeholder="جستجو..."
                value={searchChar}
                onChange={handleSearchChange}
              />
              <i className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0" data-feather="search"></i>
            </div>
          </div>
        </div>

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">تصاویر</th>
                <th className="whitespace-nowrap">نام محصول</th>
                <th className="text-center whitespace-nowrap">موجودی</th>
                <th className="text-center whitespace-nowrap">وضعیت</th>
                <th className="text-center whitespace-nowrap">فعالیت</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    در حال بارگذاری...
                  </td>
                </tr>
              ) : (
                <TableProducts products={data.products} />
              )}
            </tbody>
          </table>
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

export default Products;
