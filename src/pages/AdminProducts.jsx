import React from 'react'
import Modal from '../components/Modal'

export default function AdminProducts() {
  return (
    
       <div>
        
        <div className=' flex justify-center pt-6'>
        <button className="btn w-40  bg-sky-400 text-white hover:bg-blue-600">Add +</button>
      </div>
       
        <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Brand</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    
      <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask-square w-20 h-20">
                <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
        Apple iPhone 14 Plus
          <br/>
        </td>
        <td>42,000฿</td>
        <td>
          Smart phone
        </td>
        <td>
          Apple
        </td>
        
      </tr>
     
    </tbody>
    
    
    
  </table>
</div>
    </div>
    
  )
}
