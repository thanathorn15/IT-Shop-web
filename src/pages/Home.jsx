import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardForm from "../features/products/components/CardForm";
import { useState } from "react";
import { getAllProducts } from "../api/authApi";
import { useEffect } from "react";

export default function Home({name,brand,price,image}) {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   getAllProducts(token).then((rs) => {
  //     console.log(rs.data);
  //     setProducts(rs.data);
  //   });
  // }, []);
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <h2 className="text-2xl py-10 text-center font-medium text-gray-700">
          Shop Now
        </h2>

        <div className="flex gap-6 justify-center">
        {products.map((el) => (
          <CardForm key={el.id}
                id={el.id}
                image={el.image}
                name={el.name}
                brand={el.brand}
                price={el.price}
                hdlDelete={hdlDelete} />
        ))}
        </div>
      </div>
      <div className="mb-6"></div>
      <Footer />
    </>
  );
}
