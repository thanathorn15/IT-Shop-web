import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../api/authApi";
import CardForm from "../features/products/components/CardForm";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const hdlDelete = (e) => {
    let id = e.target.id;
    console.log(e);
    let token = localStorage.getItem("token");
    deleteProduct(id, token).then((rs) => {
      if (rs.data > 0) {
        const deleteIndex = products.findIndex((el) => el.id == id);
        const newProducts = [...products];
        newProducts.splice(deleteIndex, 1);
        setProducts(newProducts);
      }
    });
  };

  const Cards = products.map((product) => {
    return (
      <CardForm
        key={product.id}
        id={product.id}
        src={product.src}
        name={product.name}
        brand={product.brand}
        price={product.price}
        hdlDelete={hdlDelete}
      />
    );
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    getAllProducts(token).then((rs) => {
      console.log(rs.data);
      setProducts(rs.data);
    });
  }, []);

  return (
    <>
      <div className="py-6 flex justify-center">
        <Link to="/addproduct">
          <button className="btn  bg-sky-400 text-white hover:bg-blue-600 ">
            Add +
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3">{Cards}</div>
    </>
  );
}
