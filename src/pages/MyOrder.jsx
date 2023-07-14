import React from "react";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { getOrderByUserId } from "../api/authApi";
import { useAuth } from "../contexts/AuthContext";
import TableOrder from "../components/TableOrder";
import { updateOrder } from "../api/authApi";
import Spinner from "../components/loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function MyOrder() {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token");
    getOrderByUserId(user.id, token).then((rs) => {
      setOrder(rs.data);
    });
  }, []);

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const hdlSubmit = async (e) => {
    try {
      let token = localStorage.getItem("token");
      setLoading(true)
      const formData = new FormData();
      console.log("testttttttt", order[0], file);
      formData.append("image", file);
      await updateOrder(order[0]?.id, formData, token);
      setLoading(false)
      navigate("/product")
      toast.success('Upload Success')
    } catch (err) {
      toast.error('Upload Failed')
    }
  };

  return (
    <div>
      <div className="flex  justify-around  my-16">
        <div>
          {order[0]?.OrderItems?.map((el) => (
            <TableOrder
              key={el?.id}
              image={el?.Product?.image}
              name={el?.Product?.name}
              price={el?.Product?.price}
              quantity={el.quantity}
              //  status={el.status}
            />
          ))}
        </div>

        <div>
          <div>
            <img
              className="w-72 h-72"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt=""
            />
          </div>
          <div>
            <input type="file" onChange={handleImageUpload} />
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-40 h-40 pt-4"
              />
            )}
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-sky-400  text-white hover:bg-sky-600 hover:text-white duration-300 border  px-2 py-1 rounded-md h-10 w-44 mt-10"
              onClick={hdlSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Spinner loading={loading} />
    </div>
  );
}
