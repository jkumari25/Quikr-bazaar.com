import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import WithSubnavigation from "../../Mushtaq/WithSubNavigation";
import FilterComp from "../Componets/FilterComp";
import ProductList from "../Componets/ProductList";

const Product = () => {
  const columns = useBreakpointValue({
    base: "95%",
    md: "95%",
    lg: "25% 70%",
  });

  return (
    <div>
      <WithSubnavigation/>
      <SimpleGrid
        backgroundColor="#f3f3f3"
        //border={"2px solid brown"}
        mt="5rem"
        gridTemplateColumns={columns}
      >
        <FilterComp />
        <ProductList />
      </SimpleGrid>
    </div>
  );
};

export default Product;
