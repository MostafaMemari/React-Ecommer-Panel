import React from 'react';
import FeatherIcon from '../FeatherIcon/FeatherIcon';

function Pagination({ currentPage, pageCount, countOnPage, onPageChange, onCountChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    let paginationItems = [];

    // نمایش صفحه اول همیشه
    paginationItems.push(
      <li key={1}>
        <button
          className={`pagination__link ${currentPage === 1 ? 'pagination__link--active' : ''}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      </li>,
    );

    // نمایش ... قبل از صفحات میانی
    if (currentPage > 4) {
      paginationItems.push(
        <li key="start-ellipsis">
          <button
            className="pagination__link"
            onClick={() => handlePageChange(currentPage - 3)} // انتقال 3 صفحه عقب‌تر
          >
            ...
          </button>
        </li>,
      );
    }

    // صفحات میانی (3 صفحه قبل و 3 صفحه بعد از صفحه فعلی)
    for (let i = Math.max(2, currentPage - 2); i <= Math.min(pageCount - 1, currentPage + 2); i++) {
      paginationItems.push(
        <li key={i}>
          <button
            className={`pagination__link ${currentPage === i ? 'pagination__link--active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>,
      );
    }

    // نمایش ... بعد از صفحات میانی
    if (currentPage < pageCount - 3) {
      paginationItems.push(
        <li key="end-ellipsis">
          <button
            className="pagination__link"
            onClick={() => handlePageChange(currentPage + 3)} // انتقال 3 صفحه جلوتر
          >
            ...
          </button>
        </li>,
      );
    }

    // نمایش صفحه آخر همیشه
    if (pageCount > 1) {
      paginationItems.push(
        <li key={pageCount}>
          <button
            className={`pagination__link ${currentPage === pageCount ? 'pagination__link--active' : ''}`}
            onClick={() => handlePageChange(pageCount)}
          >
            {pageCount}
          </button>
        </li>,
      );
    }

    return paginationItems;
  };

  const handleCountChange = (e) => {
    onCountChange(parseInt(e.target.value));
  };

  return (
    <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
      <ul className="pagination">
        {currentPage !== 1 && (
          <li>
            <button className="pagination__link" onClick={() => handlePageChange(currentPage - 1)}>
              <FeatherIcon icon="chevron-right" />
            </button>
          </li>
        )}

        {!!pageCount && pageCount !== 1 && renderPaginationItems()}

        {!!pageCount && currentPage !== pageCount && (
          <li>
            <button
              className="pagination__link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
            >
              <FeatherIcon icon="chevron-left" />
            </button>
          </li>
        )}
      </ul>

      <select className="w-20 form-select box mt-3 sm:mt-0" value={countOnPage} onChange={handleCountChange}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}

export default Pagination;
