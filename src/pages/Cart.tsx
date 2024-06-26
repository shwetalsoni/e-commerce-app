import { useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import Button from '../components/Button'
import CartCard from '../components/CartCard'
import { MdEdit } from 'react-icons/md'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items)

  if (!cart || cart.length === 0) {
    return (
      <h1 className="flex justify-center py-28 text-xl">Your cart is empty!</h1>
    )
  }

  return (
    <div className="flex flex-col items-start py-5">
      <Link to="/" className="cursor-pointer text-gray-800 mb-5">
        <IoIosArrowRoundBack size={30} />
      </Link>
      <h1 className="text-gray-700 font-semibold text-lg md:text-2xl mb-8">
        Shopping Cart
      </h1>
      <div className="flex gap-10 md:gap-10 lg:gap-44 flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-10">
          {cart.map((card, i) => (
            <CartCard
              id={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              quantity={card.quantity}
              key={i}
            />
          ))}
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-gray-700 font-semibold text-lg md:text-xl">
              Delivery address
            </h1>
            <div className="cursor-pointer">
              <MdEdit size={18} />
            </div>
          </div>
          <p className="mb-4">
            John Doe, 1234 Elm Street, Apt 567, Springfield, IL 62704, United
            States
          </p>
          <div className="flex gap-3 items-center mb-4">
            <p>Total Amount</p>
            <p className="text-gray-700 text-xl">₹10000</p>
          </div>
          <div className="w-fit">
            <Button variant="primary" text="Proceed to Buy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
