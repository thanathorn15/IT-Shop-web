import React from "react";
import Footer from "../components/Footer";
import TableForm from "../components/TableForm";
import Modal from "../components/Modal";


export default function cart() {
  return (
    <div>
      <TableForm/>
      <Modal src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg" 
      name ='Apple iphone 14 plus' brand='Apple' price='42,000฿'category='Smart phone' detail='256GB SSD Silver (MNEP3) Processor
      Apple M2 chip, 8-core CPU with 4
      erformance & 4 efficiency cors RAM: 8GB , Storage: 256GB SD Display: 13.3-inch' />
    </div>
  );
}
