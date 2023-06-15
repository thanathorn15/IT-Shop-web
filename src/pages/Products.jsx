import { useState } from "react";
import { getAllProducts } from "../api/authApi";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CardForm from "../features/products/components/CardForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
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
    <div>
    <div className="flex gap-4">
      <Sidebar/>
      <div className="grid grid-cols-3 gap-4 ">
        {Cards}
    
        
        <div className="mb-6"></div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
