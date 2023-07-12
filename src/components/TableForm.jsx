import React from 'react'


export default function TableForm({ image,name,price,quantity,userId,productId}) {
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
        {/* <th>Brand</th> */}
        <th>Quantity</th>
        {/* <th>userId</th> */}
        {/* <th>productId</th> */}
        
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            {/* <div className="avatar"> */}
              {/* <div className="mask-square w-20 h-20">
                {src}
              </div> */}
            {/* </div> */}
           
          </div>
        </td>
        {/* <td>
        {name}
          <br/>
        </td> */}
        <td><img className='w-40 h-40 rounded-sm object-cover' src={image}  /></td>
        <td>{name}</td>
        <td>{price}</td>
        {/* <td>
          {brand}
        </td> */}
        <td >
           {quantity}
        </td>
        {/* <td >
           {userId}
        </td> */}
        {/* <td >
           {productId}
        </td> */}
      </tr>
     
    </tbody>
    
    
    
  </table>
</div>
    </div>
  )
}
