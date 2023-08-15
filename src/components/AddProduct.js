import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../Redux/addProducts";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"

const AddProduct = () => {
  
  const dispatch = useDispatch();

  
  const [state, setState] = useState({
    title: "",
    price: "",
    rating: "",
    link: "",
  });
  console.log(`state of product`, state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
};
export default AddProduct;
