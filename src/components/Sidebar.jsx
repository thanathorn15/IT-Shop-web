import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100 hover:dark:bg-gray-900  bg-zinc-100">
        <div className="flex items-center p-2 space-x-4 ">
         
          <div >
            <h2 className="text-lg font-semibold ">Category</h2>
         
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="dark:bg-gray-800 dark:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
         
                <span>Smart phone</span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
           
                <span>Smart watch</span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
       
                <span>Laptop</span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
        
                <span>Earbuds</span>
              </a>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}
