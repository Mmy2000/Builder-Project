export default function ProductCard() {
  return (
    <div className="border border-black p-3 rounded flex flex-col">
      <img
        className="w-full"
        src="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg"
        alt=""
      />
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
        <button className="py-2 w-1/2 rounded  bg-sky-600 hover:bg-sky-800 transition-colors">Edit</button>
        <button className="py-2 w-1/2 rounded   bg-red-700 hover:bg-red-800 transition-colors">Destroy</button>
      </div>
    </div>
  );
}
