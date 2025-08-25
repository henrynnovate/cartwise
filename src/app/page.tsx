import Image from "next/image"
import CategoryBar from "./components/CategoryBar"

const Homepage = () => {
  return (
    <div>
      <div className="relative aspect-[3/1] mb-15">
        <Image src={"/featured.png"} alt="Featured Image" fill/>
      </div>
      {/* Category Bar */}
      <div className="mb-8 w-full">
        <CategoryBar />
      </div>
      {/* Product List */}
    </div>
  )
}

export default Homepage