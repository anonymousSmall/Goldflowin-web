import React from "react";
import { ShoppingCart, SquareChartGantt } from "lucide-react";
import useEcomStore from "../../store/ecom-store";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";

const ProductCard = ({ item }) => {
  const actionAddtoCart = useEcomStore((state) => state.actionAddtoCart);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  //   console.log(item);

  return (
    <div className="border rounded-md shadow-md p-2 w-48">
      {/* <div> */}
      {item.images && item.images.length > 0 ? (
        <img
          src={item.images[0].url}
          className="rounded-md w-full h-32 object-cover hover:scale-110 hover:duration-200"
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 rounded-md text-center flex items-center justify-center shadow">
          No Image
        </div>
      )}
      {/* </div> */}

      <div className="py-2">
        <p className="text-xl">{item.title}</p>
        {/* <p className="text-sm text-gray-500">{item.description}</p> */}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm font-bold">{item.price}</span>
        <div className="flex py-2">
          <button className="py-2 bg-green-300 rounded-md p-2 hover:bg-green-500">
            <Link to={"/productuser/" + item.id}>
              <SquareChartGantt />
            </Link>
            {/* <SquareChartGantt /> */}
          </button>
          <button
            onClick={() => actionAddtoCart(item)}
            className="bg-blue-300 rounded-md p-2 hover:bg-blue-500 shadow-md"
          >
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
