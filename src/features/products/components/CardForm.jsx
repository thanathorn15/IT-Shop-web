import React from 'react'

export default function CardForm() {
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
              <h2 className="text-stone-950 font-semibold text-xl ">
                Apple iphone 14
              </h2>
              <div className="badge badge-secondary">NEW</div>
            </div>
            <p className="text-sm text-gray-600">
              Brand: <span className="font-semibold ">Apple</span>
            </p>
            <p className="text-sm text-gray-600">
              Price: <span className="text-rose-500 font-semibold">31,229฿</span>
            </p>

            <div className="flex justify-between items-center">
              <div className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center">
                <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
                  More Detail
                </button>
              </div>
              <button className="bg-sky-400 text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
    </div>
  )
}
