import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./styles/ProductCard.module.css";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //whenever the page refreash, wee need to  check if the url had any data,before setting the data to an empty array

  const initialCategory = searchParams.getAll("category");
  // console.log("initalCategory", initialCategory)

  const initialSort = searchParams.getAll("sort");

  const [category, setCategory] = useState(initialCategory || []);

  const [sort, setSortBy] = useState(initialSort[0] || "");

  const handleFilterCheckbox = (e) => {
    // check if the data present in the category.....

    const newCategories = [...category];
    // if yes  then remove it (the user has un checked the checkbox)

    if (newCategories.includes(e.target.value)) {
      // remove it...

      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      // else add in the category array
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };

  // console.log(category)

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    let param = {};
    param.category = category;
    sort && (param.sort = sort);
    setSearchParams(param);
  }, [category, setSearchParams, sort]);

  return (
    <div  className={style.filter}>
      <Box
       className={style.filter}
        border="1px solid gray"
        width={"12%"}
        textAlign="start"
        padding={["16px"]}
        marginStart="120px"
        position={"fixed"}
        backgroundColor="white"
        marginTop="10"
        borderRadius="6"
        height="250px"
        overflowY="scroll" 
      >
        <SimpleGrid spacing="2"  >
          <Text  bg="white"  color="#0083ca" fontSize="18" fontWeight="500" height={"20px"}  >
            Filter By Brand
          </Text>
          {/* <div> */}

          <Stack color="gray" fontSize={["12", "14", "16"]}>
            <div>
              <input
                type="checkbox"
                value="Realme"
                checked={category.includes("Realme")}
                onChange={handleFilterCheckbox}
              />

              <label>Realme</label>
            </div>

            <div>
              <input
                type="checkbox"
                value="Iphone"
                checked={category.includes("Iphone")}
                onChange={handleFilterCheckbox}
              />

              <label>Iphone</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Samsung"
                checked={category.includes("Samsung")}
                onChange={handleFilterCheckbox}
              />

              <label>Samsung</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="One plus"
                checked={category.includes("One plus")}
                onChange={handleFilterCheckbox}
              />

              <label>One plus</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Google pixel"
                checked={category.includes("Google pixel")}
                onChange={handleFilterCheckbox}
              />

              <label>Google pixel</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Oppo"
                checked={category.includes("Oppo")}
                onChange={handleFilterCheckbox}
              />

              <label>Oppo</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Vivo"
                checked={category.includes("Vivo")}
                onChange={handleFilterCheckbox}
              />

              <label>Vivo</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Motorola"
                checked={category.includes("Motorola")}
                onChange={handleFilterCheckbox}
              />

              <label>Motorola</label>
            </div>
          </Stack>
          {/* </div> */}
        </SimpleGrid>
      </Box>

      <Box
        className={style.sort}
        border="1px solid gray"
        width={"12%"}
        textAlign="start"
        padding={["16px"]}
        marginStart="120px"
        position={"fixed"}
        backgroundColor="white"
        marginTop="360"
        borderRadius="6"
        height="100px"
      >
        <Text color="#0083ca" fontSize="18" fontWeight="500">
          Sort By Price
        </Text>
        <div onChange={handleSort}>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sort === "asc"}
          />
          <label>Low to High</label>
          <br />
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sort === "desc"}
          />
          <label>High to Low</label>
        </div>
      </Box>
    </div>
  );
};

export default FilterComp;
