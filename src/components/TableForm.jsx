import React from "react";

export default function TableForm({ image, name, price, quantity }) {
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
