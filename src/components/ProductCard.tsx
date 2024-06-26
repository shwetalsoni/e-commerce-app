import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

interface ParamType {
  id: number
  title: string
  description: string
  price: number
  image: string
  rating: number
}

const ProductCard = (params: ParamType) => {
  return (
    <Link to={`/products/${params.id}`}>
      <div className="card card-compact w-80 sm:w-96 shadow-xl bg-white">
        <div className="flex h-48 justify-center">
          <img src={params.image} className="object-contain" alt="Shoes" />
        </div>
        <div className="card-body bg-white">
          <h2 className="card-title text-gray-800 line-clamp-1">
            {params.title}
          </h2>
          <p className="line-clamp-3 ">{params.description}</p>
          <div className="flex justify-start items-center text-gray-700 font-semibold mt-3">
            <p className="flex-1 text-lg">₹{params.price}</p>
            <div className="flex gap-2 items-center">
              <FaStar color="#FFD801" size={15} />
              <p className="text-base">{params.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
