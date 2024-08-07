
import ProductCard from './components/ProductCard'

function App() {

  return (
    <div className="px-5 container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
    </div>
  );
}

export default App
