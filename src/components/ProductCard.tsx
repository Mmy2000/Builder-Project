import Image from "./Image";


export default function ProductCard() {
  return (
    // <div className="shadow-lg  border-black  rounded flex flex-col">
    //   <div className="overflow-hidden">
    //     <Image
    //       imageURL="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
    //       alt="Product Name"
    //       className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 "
    //     />
    //   </div>
    //   <div className="px-3 pb-3">
    //     <h3 className="mt-1 text-xl font-semibold">simple car</h3>
    //     <p className="my-2 font-light">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
    //       excepturi.
    //     </p>
    //     <div className="flex gap-1">
    //       <span className="w-5 h-5 cursor-pointer bg-red-600 rounded-full"></span>
    //       <span className="w-5 h-5 cursor-pointer bg-yellow-600 rounded-full"></span>
    //       <span className="w-5 h-5 cursor-pointer bg-blue-600 rounded-full"></span>
    //     </div>
    //     <div className="flex justify-between items-center">
    //       <span>$250,000</span>

    //       <Image
    //         imageURL="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
    //         alt="Product Name"
    //         className="w-10 h-10 rounded-full"
    //       />
    //     </div>
    //     <div className="flex text-white gap-2 mt-3">
    //       <button className="py-2 w-1/2 rounded-md  bg-indigo-600 hover:bg-indigo-800 transition-colors">
    //         EDIT
    //       </button>
    //       <button className="py-2 w-1/2 rounded-md   bg-red-700 hover:bg-red-800 transition-colors">
    //         DELETE
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="shadow-lg border border-gray-200 rounded-lg flex flex-col transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          imageURL="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
          alt="Product Name"
          className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 "
        />
      </div>
      <div className="px-4 py-4 bg-white rounded-b-lg">
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
        <div className="flex gap-4">
          <button className="flex-1 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-800 transition-colors">
            Edit
          </button>
          <button className="flex-1 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-800 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
