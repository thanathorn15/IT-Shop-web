import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardForm from "../features/products/components/CardForm";

export default function Home({name,brand,price}) {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <h2 className="text-2xl py-10 text-center font-medium text-gray-700">
          Feature Products
        </h2>

        <div className="flex gap-6">
          <CardForm src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg" name ='Apple iphone 14 plus' brand='Apple' price='42,000฿'/>
          <CardForm src="https://fdn2.gsmarena.com/vv/bigpic/huawei-p60-pro.jpg" name ='Huawei P60 Pro' brand='Huawei' price='17,265฿'/>
          <CardForm src="https://fdn2.gsmarena.com/vv/bigpic/huawei-pocket-s.jpg" name ='Huawei Pocket S' brand='Huawei' price='12,500฿'/>
        </div>
      </div>
      <div className="mb-6"></div>
      <Footer />
    </>
  );
}
