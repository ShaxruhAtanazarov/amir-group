import React, { useState } from "react";
import ReactPaginate from "react-paginate";

// icons
import { CherwonLeftIcon, CherwonRightIcon } from "components/Icons";

const PaginatedItems = ({ itemsPerPage, children, datas }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = datas?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(datas?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % datas?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="mb-[30px]  transition-all">
        {children({ currentItems })}
      </div>
      <ReactPaginate
        className="flex justify-center items-center w-full relative h-[36px] gap-[4px] font-medium "
        pageLinkClassName="h-[36px] w-[36px] block flex justify-center items-center text-[#262728]"
        activeLinkClassName="bg-greenColor h-[36px] w-[36px] block flex justify-center items-center rounded-[10px] text-textColor transition-all"
        breakLabel="..."
        nextLabel={<CherwonRightIcon />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<CherwonLeftIcon />}
        disabledClassName="opacity-[0.6]"
        renderOnZeroPageCount={null}
        previousClassName="w-[30px] h-[30px] flex items-center  justify-center absolute left-0 top-0 arrow-hover"
        nextClassName="w-[30px] h-[30px] flex items-center justify-center absolute right-0 top-0 arrow-hover"
      />
    </div>
  );
};

export default PaginatedItems;
