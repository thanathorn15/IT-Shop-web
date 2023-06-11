import React from 'react'


export default function TableForm() {
  return (
    <div>
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
        <th>Quantity</th>
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
        <td >
           1
        </td>
      </tr>
     
    </tbody>
    
    
    
  </table>
</div>
    </div>
  )
}
