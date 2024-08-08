import Buttons from "./ui/Buttons";
import Image from "./Image";

export default function ProductCard() {
  return (
    <div className="shadow-lg border border-gray-200 rounded-lg flex flex-col transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          imageURL="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
          alt="Product Name"
          className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 "
        />
      </div>
      <div className="px-4 py-2 bg-white rounded-b-lg">
        <h3 className="mt-2 text-2xl font-semibold text-gray-800">
          Simple Car
        </h3>
        <p className="my-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          excepturi.
        </p>
        <div className="flex gap-2 mb-3">
          <span className="w-5 h-5 cursor-pointer bg-red-600 rounded-full"></span>
          <span className="w-5 h-5 cursor-pointer bg-yellow-600 rounded-full"></span>
          <span className="w-5 h-5 cursor-pointer bg-blue-600 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-900">$250,000</span>

          <Image
            imageURL="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
            alt="Product Name"
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
