import React from "react";

// Mock data for testing
import { products } from "mock";

// components
import { ProductCard } from "components/ProductCard";
import { PaginatedItems } from "components/PaginatedItems";

const PaginationData = () => {
  return (
    <div className="flex-1">
      <PaginatedItems datas={products} itemsPerPage={10}>
        {({ currentItems }) => {
          return (
            <div>
              <ul className="grid grid-cols-4 gap-[20px] lg:grid-cols-3 xl:grid-cols-4  xxl:grid-cols-5">
                {currentItems?.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </ul>
            </div>
          );
        }}
      </PaginatedItems>
    </div>
  );
};

export default PaginationData;
