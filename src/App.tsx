
import { useState } from 'react';
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal';
import { productList } from './data/Index';
import Buttons from './components/ui/Buttons';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const renderedProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  return (
    <>
      <div className="px-5 container mx-auto my-10  ">
        <Buttons className="bg-green-600 mb-6 text-white font-medium hover:bg-green-800" width='w-fit' onClick={open}>
          Add
        </Buttons>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {renderedProductList}
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Add New Product">
        <div className="flex justify-between gap-20">
          <Buttons className=" bg-green-600 text-white font-medium hover:bg-green-800 ">
            Submit
          </Buttons>
          <Buttons className=" bg-red-600 text-white font-medium hover:bg-red-800 ">
            Cancel
          </Buttons>
        </div>
      </Modal>
    </>
  );
}

export default App
