import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { addCart } from "../../../api/authApi";
import { useAuth } from "../../../contexts/AuthContext";
import Modal from "../../../components/Modal";


export default function CardForm({
  id,
  src,
  name,
  brand,
  price,
  userId,
  hdlDelete,
}) {
  const navigate = useNavigate();

  const { user } = useAuth();

  const btnrole = user?.role || "user";
  console.log(user);
  

  const [input, setInput] = useState({
    productId: id,
    userId: 5,
    quantity: 1,
    price: price,
  });

  const hdlSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    addCart(input, token).then((rs) => {
      console.log(rs);
      navigate("/cart");
    });
  };

  return (
    <div>
      <div
        className=" flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl 
        hover:scale-105 duration-300 px-4 py-7 rounded-lg overflow-hidden max-w-sm"
      >
        <div className="flex justify-center ">
          <img
            className="w-72 h-48 object-contain hover:scale-110 duration-500"
            src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg"
          />
        </div>
        <div className=" flex justify-between items-center">
          <h2 className="text-stone-950 font-semibold text-xl ">{name}</h2>
        </div>
        <p className="text-sm text-gray-600">
          brand:<span className="font-semibold "> {brand}</span>
        </p>
        <p className="text-sm text-gray-600">
          price:<span className="text-rose-500 font-semibold"> {price}</span>
        </p>

        <div className="flex justify-between items-center">
          
        {btnrole !== "ADMIN" ? (
          <>
          <button
        className="   text-sky-400 hover:text-sky-600   px-2 py-1 rounded-md h-12 "
        onClick={() => window.my_modal_5.showModal()}
      
      >
        More Detail
      </button>
          <button
            className=" bg-sky-400  text-white hover:bg-sky-600 hover:text-white duration-300 border  px-2 py-1 rounded-md h-10 "
            onClick={hdlSubmit}
          >
            Add to cart
          </button>
          </>
                ) : (
                  <></>
                )}
        


          {btnrole === "ADMIN" ? (
            <>
                  <div >
                  <Link to={`/editproduct/${id}`}>
                    <button className="w-32 btn btn-squre text-white bg-emerald-500 hover:text-sky-500">Edit</button>
                  </Link>
                </div>
      
                <div >
                  <button
                    id={id}
                    className="w-32 btn btn-squre bg-rose-600 text-white"
                    onClick={hdlDelete}
                  >
                    Delete
                  </button>
                </div>
                </>
                ) : (
                  <></>
                )}
          
        </div>
      </div>
    </div>
  );
}
