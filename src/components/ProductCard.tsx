import Buttons from "./ui/Buttons";
import Image from "./Image";

import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";

interface IProps {
  product : IProduct
}

export default function ProductCard({product}:IProps) {

  const {title , imageURL ,description , category , price} = product
 
  return (
    <div className="shadow-lg border max-w-sm mx-auto  border-gray-200 rounded-lg flex flex-col transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          imageURL={imageURL}
          alt={title}
          className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 "
        />
      </div>
      <div className="px-4 py-2 bg-white rounded-b-lg">
        <h3 className="mt-2 text-2xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="my-3 text-gray-600">
          {textSlicer(description)}
        </p>
        <div className="flex gap-1 mb-3">
          <span className="w-5 h-5 cursor-pointer bg-red-600 rounded-full"></span>
          <span className="w-5 h-5 cursor-pointer bg-yellow-600 rounded-full"></span>
          <span className="w-5 h-5 cursor-pointer bg-blue-600 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-900">${price}</span>

          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full border border-gray-300 "
          />
        </div>
        <div className="flex gap-2">
          <Buttons
            width="w-full"
            className="  bg-indigo-600 text-white font-medium hover:bg-indigo-800 "
            onClick={() => {
              console.log("clicked");
            }}
          >
            Edit
          </Buttons>
          <Buttons
            width="w-full"
            className=" bg-red-600 text-white font-medium hover:bg-red-800 "
          >
            Delete
          </Buttons>
        </div>
      </div>
    </div>
  );
}
