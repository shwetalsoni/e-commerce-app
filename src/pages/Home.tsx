import { useSelector, useDispatch } from 'react-redux'
import {
  filterProductsByCategory,
  resetFilter,
} from '../features/ProductSlice.ts'
import { RootState } from '../store/store.ts'
import ProductCard from '../components/ProductCard.tsx'
import { MdOutlineFilterList } from 'react-icons/md'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.products)

  const handleCategoryFilter = (category: string) => {
    dispatch(filterProductsByCategory(category))
  }

  const handleResetFilter = () => {
    dispatch(resetFilter())
  }

  return (
    <div className="mt-5">
      {/* filters */}
      <div className="flex justify-center sm:justify-start gap-2 items-center flex-wrap mt-5">
        <div className="mr-5">
          <MdOutlineFilterList size={25} />
        </div>
        <div
          onClick={() => handleResetFilter()}
          className="text-sm sm:text-lg text-gray-400 border border-gray-300 p-1 sm:p-2 cursor-pointer"
        >
          All
        </div>
        <div
          onClick={() => handleCategoryFilter('electronics')}
          className="text-sm sm:text-lg text-gray-400 border border-gray-300 p-1 sm:p-2 cursor-pointer"
        >
          Electronics
        </div>
        <div
          onClick={() => handleCategoryFilter("men's clothing")}
          className="text-sm sm:text-lg text-gray-400 border border-gray-300 p-1 sm:p-2 cursor-pointer"
        >
          Men's wear
        </div>
        <div
          onClick={() => handleCategoryFilter("women's clothing")}
          className="text-sm sm:text-lg text-gray-400 border border-gray-300 p-1 sm:p-2 cursor-pointer"
        >
          Women's wear
        </div>
        <div
          onClick={() => handleCategoryFilter('jewelery')}
          className="text-sm sm:text-lg text-gray-400 border border-gray-300 p-1 sm:p-2 cursor-pointer"
        >
          Jewelery
        </div>
      </div>
      <div className="flex gap-10 flex-wrap items-center justify-center sm:justify-start mt-10 cursor-pointer">
        {products.map((product, i) => (
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating.rate}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
