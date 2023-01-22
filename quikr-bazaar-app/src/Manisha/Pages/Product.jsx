import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import FilterComp from "../Componets/FilterComp";
import ProductList from "../Componets/ProductList";

const Product = () => {
  const columns = useBreakpointValue({
    base: "80%",
    md: "80%",
    lg: "25% 70%",
  });

  return (
    <div>
      <SimpleGrid
        backgroundColor="#f3f3f3"
        // border={"2px solid brown"}
        gridTemplateColumns={columns}
      >
        <FilterComp />
        <ProductList />
      </SimpleGrid>
    </div>
  );
};

export default Product;
