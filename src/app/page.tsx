import Image from "next/image"
import CategoryBar from "./components/CategoryBar"
import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"

const Homepage = () => {
  return (
    <div>
      <div className="relative aspect-[3/1] mb-15">
        <Image src={"/featured.png"} alt="Featured Image" fill/>
      </div>

      {/* Product List */}
        <ProductList />
    </div>
  )
}

export default Homepage