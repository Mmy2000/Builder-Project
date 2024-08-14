
import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal';
import { colors, formInputList, productList } from './data/Index';
import Buttons from './components/ui/Buttons';
import Input from './components/ui/Input';
import { IProduct } from './interfaces';
import { productValidation } from "./validation";
import ErrorMessage from "./components/err/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuidv4 } from "uuid";
import Select from "./components/ui/Select";


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
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors , setTempColors] = useState<string[]>([])
  
  
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
    
    const isMsgError = Object.values(errors).some(value => value == '')&& Object.values(errors).every(value => value =='')
    if (!isMsgError) {
      setErrors(errors)
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuidv4(), colors: tempColors },
      ...prev
    ]);
    console.log({ ...product, id: uuidv4() });
    setTempColors([])
    setProduct(defaultProductObj)
    close()

    
  };

  const onCancel = () => {
    console.log("cancel");
    setProduct(defaultProductObj);
    close()
  };
  

  const renderedProductList = products.map((product) => (
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

  const renderedProductColor = colors.map((color) => <CircleColor key={color} color={color} onClick={()=> {
    if (tempColors.includes(color)) {
      setTempColors((prev)=> prev.filter(item => item != color))
      return;
    }
    setTempColors( (prev)=>  [...prev , color])}
  } /> );

  

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
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderedFormInput}
          <Select />
          <div className="flex gap-1 flex-wrap mb-3">
            {renderedProductColor}
          </div>
          <div className="flex gap-1 flex-wrap mb-3">
            {tempColors.map((color) => (
              <span
                key={color}
                className={`p-1 mr-1 mb-1 text-xs rounded-md ${
                  color == "#000000" ? "text-white" : "text-black"
                }  `}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex justify-between mt-5 gap-2">
            <Buttons className=" bg-green-600 text-white font-medium hover:bg-green-800 ">
              Submit
            </Buttons>
            <Buttons
              className=" bg-red-600 text-white font-medium hover:bg-red-800 "
              onClick={onCancel}
            >
              Cancel
            </Buttons>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default App
