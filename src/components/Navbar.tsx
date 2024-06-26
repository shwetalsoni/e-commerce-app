import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store.ts'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { selectTotalItems } from '../features/CartSlice.ts'
import { searchProducts } from '../features/ProductSlice.ts'
import { useState } from 'react'

const Navbar = () => {
  const dispatch = useDispatch()
  const totalItems = useSelector((state: RootState) =>
    selectTotalItems(state.cart)
  )

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)
    dispatch(searchProducts(query))
  }

  return (
    <div className="flex items-center">
      <div className="flex w-fit flex-1">
        <Link className="w-fit" to="/">
          Home
        </Link>
      </div>
      <input
        className="border bg-white border-gray-300 p-2 mr-5 rounded-md"
        type="text"
        placeholder="Search.."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Link to="/cart">
        <div className="relative">
          {totalItems > 0 && (
            <div className="absolute -top-3 -right-2 p-[1px] w-4 h-4 text-[10px] rounded-full bg-red-600 text-white">
              <div className="flex justify-center items-center">
                {totalItems}
              </div>
            </div>
          )}
          <MdShoppingCart size={20} />
        </div>
      </Link>
    </div>
  )
}

export default Navbar
