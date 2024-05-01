import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addCart,deleteCart} from '../redux/cartSlice'
const Card = ({ product }) => {
    const dispatch = useDispatch()
const cardData = useSelector((state) => state.myCart.cartList);

  const [changeButton, setChangeButton] = useState(false);

  const handleAdd = (product) => {
    setChangeButton(!changeButton);
    dispatch(addCart(product) );
  };

  const handleRemove = (id) => {
    setChangeButton(!changeButton);
    dispatch(deleteCart(id));
  };

  return (
    <section className=" w-72 md:w-96   mx-auto border my-3 rounded-md">
      <div className="flex m-5">
        <div className="flex flex-col">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-fill h-48 rounded-md w-full"
          />
          <div className="flex relative">
            <h1 className="font-poppins font-bold text-xl m-1">
              {product.title}{" "}
            </h1>
            <p className="font-poppins mt-1 absolute top-1 right-1">
              ⭐ {product.rating.toFixed(2)}
            </p>
          </div>
          <p className="font-poppins mt-1">
            {product.description.length > 75
              ? product.description.slice(0, 75) + `...`
              : product.description}
          </p>
          <p className=" mt-1">
           
          <span className="text-xl font-bold">₹{(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</span>
            <span className="text-gray-500 line-through px-2 text-lg">₹{product.price}</span>
            <span className="text-green-500 font-bold ">{product.discountPercentage}% OFF</span>
          </p>
          {cardData.includes(product) ? (
            <button className="font-poppins p-1 border bg-red-400 text-white rounded m-2  hover:bg-black hover:text-white" onClick={() => handleRemove(product.id)}> Remove from Cart</button>
          ) : (
            <button
              className="font-poppins p-1 border border-black rounded m-2 hover:bg-black hover:text-white"
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;