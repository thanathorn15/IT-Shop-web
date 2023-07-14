import { useState } from "react";
import { addProduct, addImage } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Spinner from "../components/loading";

export default function AddProduct() {
  const [file, setFile] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    name: "",
    price: "",
    brand: "",
    detail: "",
    image: "",
    categoryId: "",
  });
  const navigate = useNavigate();

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    setLoading(true)
    addProduct(input, token).then((rs) => {
      if (file) {
        const formData = new FormData(); 
        formData.append("image", file);
        addImage(rs.data.id, formData, token).then((rs) => {
          console.log(rs)
          navigate("/adminproduct");
          setLoading(false)
        });
      }
    });
  };

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
    const file = e.target.files[0]; 
    setSelectedImage(URL.createObjectURL(file)); 
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700 pb-8">
            Add product
          </h1>

          <form className="space-y-4" onSubmit={hdlSubmit}>
            <div>
              <input
                placeholder="Name"
                className="w-full input input-bordered"
                name="name"
                onChange={hdlChangeInput}
                value={input.name}
              />
            </div>
            <div>
              <input
                placeholder="Price"
                className="w-full input input-bordered"
                name="price"
                onChange={hdlChangeInput}
                value={input.price}
              />
            </div>
            <div>
              <input
                placeholder="Brand"
                className="w-full input input-bordered"
                name="brand"
                onChange={hdlChangeInput}
                value={input.brand}
              />
            </div>
            <div>
              <input
                placeholder="Detail"
                className="w-full input input-bordered"
                name="detail"
                onChange={hdlChangeInput}
                value={input.detail}
              />
            </div>

            <div>
              <input
                placeholder="CategoryId"
                className="w-full input input-bordered"
                name="categoryId"
                onChange={hdlChangeInput}
                value={input.categoryId}
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

            <div className="pt-6 flex gap-4 justify-center">
              <button className="btn w-40 bg-sky-400 text-white hover:bg-blue-600">
                Save
              </button>
              <button
                className="btn w-40 bg-sky-400 text-white hover:bg-blue-600"
                onClick={() => setInput(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Spinner loading={loading} />
    </div>
  );
}
