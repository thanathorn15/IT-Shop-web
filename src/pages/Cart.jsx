import React from "react";
import Footer from "../components/Footer";
import TableForm from "../components/TableForm";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { getProductById, getCart, getCartByUserId } from "../api/authApi";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

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

      {/* <Modal src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg" 
      name ='Apple iphone 14 plus' brand='Apple' price='42,000฿'category='Smart phone' detail='256GB SSD Silver (MNEP3) Processor
      Apple M2 chip, 8-core CPU with 4
      erformance & 4 efficiency cors RAM: 8GB , Storage: 256GB SD Display: 13.3-inch' /> */}
    </div>
  );
}
