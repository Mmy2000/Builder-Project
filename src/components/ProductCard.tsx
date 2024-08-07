import Image from "./Image";


export default function ProductCard() {
  return (
    <div className="shadow-lg border-black  rounded flex flex-col">
      <Image
        imageURL="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
        alt="Product Name"
      />
      <div className="px-3 pb-3">
        <h3 className="mt-1 text-xl font-semibold">simple car</h3>
        <p className="my-2 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          excepturi.
        </p>
        <div className="flex gap-1">
          <span className="w-5 h-5 cursor-pointer bg-red-600 rounded-full"></span>
          <span className="w-5 h-5 cursor-pointer bg-yellow-600 rounded-full"></span>
          <span className="w-5 h-5 cursor-pointer bg-blue-600 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center">
          <span>$250,000</span>
          <img
            className="w-10 h-10 rounded-full"
            src="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
            alt=""
          />
        </div>
        <div className="flex text-white gap-2 mt-3">
          <button className="py-2 w-1/2 rounded-md  bg-indigo-600 hover:bg-indigo-800 transition-colors">
            Edit
          </button>
          <button className="py-2 w-1/2 rounded-md   bg-red-700 hover:bg-red-800 transition-colors">
            Destroy
          </button>
        </div>
      </div>
    </div>
  );
}
