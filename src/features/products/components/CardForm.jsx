import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { addCart } from "../../../api/authApi";

export default function CardForm({id, src, name, brand, price,userId, hdlDelete}) {
  const navigate = useNavigate()
const param = useParams()

const [input,setInput] = useState({
  productId : id,
  userId : 5,
  quantity : 1,
  price : price
})

  const hdlSubmit = e => {
    e.preventDefault()

    let token = localStorage.getItem('token')
    addCart(input, token).then( rs => {
        console.log(rs)
        navigate('/cart')
    })
  }

  return (
    <div>
      <div
        className=" flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl 
        hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden max-w-sm"
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
          {/* <Modal /> */}

          <button className="bg-sky-400  text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md h-12 " onClick={hdlSubmit}>
            Add to cart
          </button>


     

          <div className="w-20">
          <Link to={`/editproduct/${id}`}>
            <button
              
              className="btn btn-squre btn-secondary"
            >
              Edit
            </button>

       </Link>
          </div>

          <div className="w-20">
            <button
              id={id}
              className="btn btn-squre btn-warning text-white"
              onClick={hdlDelete}
            >
              Delete
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}
