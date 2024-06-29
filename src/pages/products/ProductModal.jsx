import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const currencies = [
  {
    value: "Mobile",
    label: "Mobile",
  },
  {
    value: "Laptop",
    label: "Laptop",
  },
  {
    value: "Electronics",
    label: "Electronics",
  },
  {
    value: "Food",
    label: "Food",
  },
];

function ProductModal({ open, handleClose, isEdit, payload }) {
  // const{name,price,category,id}=payload?.row;
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    category: "",
  });
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]:value
    });
  };
  useEffect(() => {
    if (isEdit && payload) {
      setProductData({
        name: payload?.row.name || "",
        price: payload?.row.price || "",
        category: payload?.row.category || "",
      });
    }
    else{
      setProductData({
        name:"",
        price:"",
        category:"",
      });
    }
  }, [isEdit, payload]);

  console.log("PID___",payload);

  const addProduct = async () => {
    await addDoc(empCollectionRef, {
      name: productData?.name,
      price: Number(productData?.price),
      category: productData?.category,
      date: String(new Date()),
    });
    getProducts();
    handleClose();
    Swal.fire("Submitted", "Your product has been added", "success");
  };

  const getProducts = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const editProduct = async () => {
    console.log("OOOOOOOOO++++++++++++")
    const productDoc = doc(db, "products", payload?.row?.id);
    console.log("productDoc", productDoc);
    const updateFields = {
      name: productData?.name,
      price: Number(productData?.price),
      category: productData?.category,
      date: String(new Date()),
    };
    await updateDoc(productDoc,updateFields);
    getProducts();
    handleClose();
    Swal.fire("Submitted", "Your product has been Updated", "success");
  };

  function handleProduct(){
    if(isEdit && payload){
      editProduct();
    }
    else{
      addProduct();
    }
  }
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Box sx={{m:2}}/> */}
          <Typography variant="h5" align="center">
            {!isEdit ? "Add Product" : "Edit Product"}
          </Typography>
          <IconButton
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                name="name"
                value={productData?.name}
                onChange={handleInputChange}
                sx={{ minWidth: 100 + "%" }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                size="small"
                name="price"
                type="number"
                value={productData?.price}
                onChange={handleInputChange}
                sx={{ minWidth: 100 + "%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupeeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Category"
                variant="outlined"
                select
                size="small"
                name="category"
                value={productData?.category}
                onChange={handleInputChange}
                sx={{ minWidth: 100 + "%" }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="right">
                <Button
                  variant="contained"
                  // onClick={() => {
                  //   isEdit ? { editProduct } : { addProduct };
                  // }}
                  onClick={handleProduct}
                >
                  {!isEdit ? "Add Product" : "Update Product"}
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;
