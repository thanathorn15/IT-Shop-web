import React from "react";

export default function TableOrder({ image, name, price, quantity,status }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table" >
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              </td>
              <td>
                <img
                  className="w-40 h-40 rounded-sm object-cover"
                  src={image}
                />
              </td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
