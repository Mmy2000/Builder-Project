
import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal';
import { categories, colors, formInputList, productList } from './data/Index';
import Buttons from './components/ui/Buttons';
import Input from './components/ui/Input';
import { IProduct } from './interfaces';
import { productValidation } from "./validation";
import ErrorMessage from "./components/err/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuidv4 } from "uuid";
import Select from "./components/ui/Select";
import { productName } from "./types";


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
  const [isOpenEditModel, setIsOpenEditModel] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] =
    useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors:''
  });
  const [tempColors , setTempColors] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  console.log(productToEdit);
  
  
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  function openEdit() {
    setIsOpenEditModel(true);
  }

  function closeEdit() {
    setIsOpenEditModel(false);
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
  const onChangeEditHandler = (event:ChangeEvent<HTMLInputElement>) =>{
    const {value , name} = event.target
    setProductToEdit({
      ...productToEdit,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:""
    })
    
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Extract product details
    const { title, description, price, imageURL, colors } = product;

    // Validate product
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
      colors,
    });

    

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((value) => value !== "");

    if (hasErrors) {
      // Set errors and exit the handler
      setErrors(errors);
      console.log(errors);
      
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuidv4(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    console.log({ ...product, id: uuidv4() });
    setTempColors([]);
    setProduct(defaultProductObj);
    close();
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Extract product details
    const { title, description, price, imageURL, colors } = productToEdit;

    // Validate product
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
      colors,
    });

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((value) => value !== "");

    if (hasErrors) {
      // Set errors and exit the handler
      setErrors(errors);
      console.log(errors);
      
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuidv4(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    const updatedProduct = [...products]
    updatedProduct[productToEditIdx] = productToEdit
    setProducts(updatedProduct)
    setTempColors([]);
    setProductToEdit(defaultProductObj);
    closeEdit();
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    close()
  };
  
  

  const renderedProductList = products.map((product, idx) => (
      <ProductCard
        product={product}
        key={product.id}
        setProductToEdit={setProductToEdit}
        openEdit={openEdit}
        idx={idx}
        setProductToEditIdx={setProductToEditIdx}
      />
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
      {/* Ensure ErrorMessage handles string properly */}
      <ErrorMessage msg={errors[input.name] } />
    </div>
  ));

  const renderedProductColor = colors.map((color) => <CircleColor key={color} color={color} onClick={()=> {
    if (tempColors.includes(color)) {
      setTempColors((prev)=> prev.filter(item => item != color))
      return;
    }
    setTempColors( (prev)=>  [...prev , color])}
  } /> );

  const renderedProductEditWithError = (id:string , label:string , name:productName)=>{
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-1">
          {/* {input.label} */}
          {label}
        </label>
        <Input
          id={id}
          name={name}
          type="text"
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        {/* Ensure ErrorMessage handles string properly */}
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  }

  

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
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
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
      <Modal
        isOpen={isOpenEditModel}
        closeModal={closeEdit}
        title="Edit Product"
      >
        <form className="space-y-2" onSubmit={submitEditHandler}>
          {renderedProductEditWithError("title", "Product Title", "title")}
          {renderedProductEditWithError(
            "description",
            "Product Description",
            "description"
          )}
          {renderedProductEditWithError(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderedProductEditWithError("price", "Product Price", "price")}
          {/* <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          /> */}
          {/* <div className="flex gap-1 flex-wrap mb-3">
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
          </div> */}

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
