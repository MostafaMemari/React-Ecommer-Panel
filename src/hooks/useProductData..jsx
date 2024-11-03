import { useState, useEffect } from 'react';

const useProductData = (getProductsService) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const handleGetProducts = async (page, count, char, filters) => {
    setLoading(true);
    try {
      const res = await getProductsService(page, count, char, filters);
      if (res.status === 200) {
        setData(res.data);
        setPageCount(res.data.pagination.pageCount);
      } else {
        console.error('Error fetching products: ', res.status);
      }
    } catch (error) {
      console.error('Error fetching products: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetProducts(currentPage, countOnPage, searchChar);
  }, [currentPage, countOnPage, searchChar]);

  return {
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
  };
};

export default useProductData;
