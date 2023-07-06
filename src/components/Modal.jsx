import React from 'react'


export default function Modal({src,
  name,
  brand,
  price,
  detail,
  category}) {
    
  return (
    
        <div>
     <button
        className=" bg-sky-400  text-white hover:bg-sky-600 hover:text-white duration-300 border  px-2 py-1 rounded-md h-12 "
        onClick={() => window.my_modal_5.showModal()}
      
      >
        More Detail
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg pb-4">{name}</h3>
          <img
            className="w-72 h-48 object-contain hover:scale-110 duration-500 pb-4"
            src={src}
          />
          <p className="text-sm text-gray-600">
            Category: <span className="font-semibold ">{category}</span>
          </p>
          <p className="text-sm text-gray-600">
            Brand: <span className="font-semibold ">{brand}</span>
          </p>
          <p className="text-sm text-gray-600 pb-4">
            Price: <span className="text-rose-500 font-semibold">{price}</span>
          </p>
          <p >{detail}</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
    
  )
}
