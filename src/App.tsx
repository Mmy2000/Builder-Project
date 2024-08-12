
import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal';
import { formInputList, productList } from './data/Index';
import Buttons from './components/ui/Buttons';
import Input from './components/ui/Input';
import { IProduct } from './interfaces';
import { productValidation } from "./validation";
import ErrorMessage from "./components/err/ErrorMessage";



function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
    const {value , name} = event.target
    setProduct({
      ...product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:""
    })
    
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {title , description , price , imageURL} = product
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });
    console.log(errors);
    
    const isMsgError = Object.values(errors).some(value => value == '')&& Object.values(errors).every(value => value =='')
    console.log(isMsgError);
    if (!isMsgError) {
      setErrors(errors)
      return;
    }
    console.log("send data");
    
  };

  const onCancel = () => {
    console.log("cancel");
    setProduct(defaultProductObj);
    close()
  };
  

  const renderedProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  const renderedFormInput = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-1">
        {input.label}
      </label>
      <Input
        id={input.id}
        name={input.name}
        type="text"
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));
  

  return (
    <>
      <div className="px-5 container mx-auto my-10  ">
        <Buttons
          className="bg-green-600 mb-6 text-white font-medium hover:bg-green-800"
          width="w-fit"
          onClick={open}
        >
          Build Now
        </Buttons>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {renderedProductList}
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Add New Product">
        <div className='space-y-2'>
          {renderedFormInput}
          <form className="flex justify-between mt-5 gap-2" onSubmit={submitHandler}>
            <Buttons className=" bg-green-600 text-white font-medium hover:bg-green-800 ">
              Submit
            </Buttons>
            <Buttons className=" bg-red-600 text-white font-medium hover:bg-red-800 " onClick={onCancel}>
              Cancel
            </Buttons>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default App
