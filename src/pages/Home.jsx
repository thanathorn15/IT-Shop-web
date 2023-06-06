import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CardForm from "../features/products/components/CardForm";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <h2 className="text-2xl py-10 text-center font-medium text-gray-700">
          Feature Products
        </h2>

        <div className="flex gap-6">
          <CardForm />
          <CardForm />
          <CardForm />
        </div>
      </div>
      <div className="mb-6"></div>
      <Footer />
    </>
  );
}
