import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import ProductList from "./products/ProductList";

function Products() {
  return (
    <>
      <div className="bgColor">
        <NavBar />
        <Box height={55} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Products;
