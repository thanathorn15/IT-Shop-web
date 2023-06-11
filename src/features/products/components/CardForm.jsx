import React from 'react'
import Modal from '../../../components/Modal'

export default function CardForm({src,name,brand,price}) {
  return (
    <div>
              <div
            className=" flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl 
        hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden max-w-sm"
          >
            <div className="flex justify-center ">
              <img
                className="w-72 h-48 object-contain hover:scale-110 duration-500"
                src={src}
              />
            </div>
            <div className=" flex justify-between items-center">
              <h2 className="text-stone-950 font-semibold text-xl ">
                {name}
              </h2>
              <div className="badge badge-secondary">New</div>
            </div>
            <p className="text-sm text-gray-600">
             brand:<span className="font-semibold "> {brand}</span>
            </p>
            <p className="text-sm text-gray-600">
              price:<span className="text-rose-500 font-semibold"> {price}</span>
            </p>

            <div className="flex justify-between items-center">
            
            
            
            
            <Modal/>
            
              <button className="bg-sky-400 text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
    </div>
    
  )
}
