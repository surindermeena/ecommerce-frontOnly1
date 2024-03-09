import { Box } from "@mui/material";
import CardComponent from "./cardComp";

const ProductList = ({productsData}) => {
  return (
    <>
      <Box
        m={2}
        pt={2}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}
      >

       {productsData && productsData.map((product)=><CardComponent product={product} /> )}


      </Box>
    </>
  );
};

export default ProductList;
