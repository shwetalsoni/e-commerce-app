import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../features/CartSlice'

interface paramType {
  id: number
  image: string
  title: string
  price: number
  quantity: number
}

import { MdDelete } from 'react-icons/md'

const CartCard = (params: paramType) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(params.id))
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(params.id))
  }

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(params.id))
  }

  return (
    <div className="flex flex-row gap-5 sm:gap-10">
      <div className="w-32 sm:w-1/6">
        <div className="flex justify-center">
          <img className="object-contain" src={params.image} alt="img" />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h1 className="text-sm sm:text-md md:text-lg text-gray-600 font-semibold mb-5">
          {params.title}
        </h1>
        <p className="text-sm sm:text-md md:text-lg text-gray-500 font-medium mb-5">
          ₹{params.price}
        </p>
        <div className="flex gap-5 items-center flex-wrap">
          <div onClick={handleRemoveFromCart} className="cursor-pointer">
            <MdDelete size={20} />
          </div>
          <div className="flex">
            <h3 className="mr-2">Quantity</h3>
            <div className="flex gap-1 items-center">
              <div
                onClick={handleDecreaseQuantity}
                className="px-2 rounded-sm bg-gray-200 text-gray-900 text-sm md:text-md cursor-pointer"
              >
                -
              </div>
              <div className="px-2 text-gray-900 text-sm md:text-md">
                {params.quantity}
              </div>
              <div
                onClick={handleIncreaseQuantity}
                className="px-2 rounded-sm bg-gray-200 text-gray-900 text-sm md:text-md cursor-pointer"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
