import React from "react";
import Footer from "../components/Footer";
import TableForm from "../components/TableForm";
import Modal from "../components/Modal";
import { useEffect } from "react";
import {
  getProductById,
  getCart,
  getCartByUserId,
  addOrder,
} from "../api/authApi";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const [input,setInput] = useState([]);
  const navigate = useNavigate()

  // useEffect(() => {
  //   async function fetchCart() {
  //     let token = localStorage.getItem("token");
  //     try {
  //       const res = await getCart(token);
  //       setProducts(res.data)
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchCart();
  // }, []);
  useEffect(() => {
    async function fetchCart() {
      let token = localStorage.getItem("token");
      try {
        const res = await getCartByUserId(user.id, token);
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (user) {
      fetchCart();
    }
  }, [user]);


  const hdlAddOrder = async () => {
    try {
      let token = localStorage.getItem("token");
      const rs = await addOrder(input, token);
      setInput(rs.data);
      console.log(rs.data)
      navigate('/myorder')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {products?.map((el) => (
        <TableForm
          key={el.id}
          image={el.Product.image}
          name={el.Product.name}
          brand={el.Product.brand}
          price={el.Product.price}
          quantity={el.quantity}
          userId={el.User.id}
          productId={el.productId}
        />
      ))}

      {products ? (
        <button className=" flex mx-auto bg-sky-400  text-white hover:bg-sky-600 hover:text-white duration-300 border  px-2 py-1 rounded-md h-10 " onClick={hdlAddOrder}>
          Check out
        </button>
      ) : null}
    </div>
  );
}
