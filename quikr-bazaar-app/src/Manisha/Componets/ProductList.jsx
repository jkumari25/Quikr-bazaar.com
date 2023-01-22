import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProduct, singleProduct } from "../../Redux/ProductReducer/action";
import { Box } from "@chakra-ui/react";

const ProductList = () => {
  const product = useSelector((store) => store.reducer.product);
  // console.log(product);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  // console.log(useLocation);

  useEffect(() => {
    if (location || product.length === 0) {
      const sortBy = searchParams.get("sort");
      const getProductParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      dispatch(getProduct(getProductParams));
    }
  }, [product.length, dispatch, location.search]);

  return (
    <div>
      <Box
      //  border="2px solid red"
       >
        {product.length > 0 &&
          product.map((SingleProduct) => {
            return (
              <div key={SingleProduct.id}>
                <Link to={`product/${SingleProduct.id}`}>
                <ProductCard {...SingleProduct} />
                </Link>
              </div>
            );
          })}
      </Box>
    </div>
  );
};

export default ProductList;
