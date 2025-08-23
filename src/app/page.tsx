import Image from "next/image"

const Homepage = () => {
  return (
    <div>
      <div className="relative aspect-[3/1] mb-15">
        <Image src={"/featured.png"} alt="Featured Image" fill/>
      </div>
    </div>
  )
}

export default Homepage