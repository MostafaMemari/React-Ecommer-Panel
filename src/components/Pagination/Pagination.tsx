import React from "react";
import { PaginationProps } from "./types";
import PaginationLink from "./PaginationLink";
import Lucide from "../../base-components/Lucide";

const Pagination: React.FC<PaginationProps> = ({ limit, page, pageCount, onPageChange, onLimitChange }) => {
  const renderPages = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(pageCount, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationLink key={i} active={i === page} onClick={() => onPageChange(i)}>
          {i}
        </PaginationLink>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-between col-span-12 intro-y sm:flex-row sm:flex-nowrap">
      <nav className="w-full sm:w-auto sm:ml-auto">
        <ul className="flex">
          <PaginationLink onClick={() => onPageChange(1)} hidden={page === 1}>
            <Lucide icon="ChevronsRight" className="w-4 h-4" />
          </PaginationLink>
          <PaginationLink onClick={() => onPageChange(page - 1)} hidden={page === 1}>
            <Lucide icon="ChevronRight" className="w-4 h-4" />
          </PaginationLink>

          {page > 3 && <PaginationLink hidden>...</PaginationLink>}
          {renderPages()}
          {page < pageCount - 2 && <PaginationLink hidden>...</PaginationLink>}

          <PaginationLink onClick={() => onPageChange(page + 1)} hidden={page === pageCount}>
            <Lucide icon="ChevronLeft" className="w-4 h-4" />
          </PaginationLink>
          <PaginationLink onClick={() => onPageChange(pageCount)} hidden={page === pageCount}>
            <Lucide icon="ChevronsLeft" className="w-4 h-4" />
          </PaginationLink>
        </ul>
      </nav>

      <select className="w-20 mt-3 !box sm:mt-0" value={limit} onChange={(e) => onLimitChange(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default Pagination;
