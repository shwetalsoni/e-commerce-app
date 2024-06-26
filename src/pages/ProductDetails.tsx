import { FaStar } from 'react-icons/fa'
import Button from '../components/Button'
import Review from '../components/Review'
import { useParams } from 'react-router-dom'
import { selectProduct } from '../features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { useEffect } from 'react'
import { addToCart } from '../features/CartSlice.ts'

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>()
  const dispatch = useDispatch()
  const product = useSelector(
    (state: RootState) => state.products.productDetails
  )

  useEffect(() => {
    if (productId) {
      dispatch(selectProduct(Number(productId)))
    }
  }, [dispatch, productId])

  if (!product) return <div>Product not found</div>

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  return (
    <div className="mt-10 flex lg:flex-nowrap justify-center gap-10 flex-wrap">
      <div className="flex lg:flex-1 w-1/2 justify-center">
        <img className="object-contain" src={product.image} alt="img" />
      </div>
      <div className="flex lg:flex-1 flex-col flex-wrap gap-5">
        <h1 className="text-xl md:text-4xl text-gray-600 font-semibold">
          {product.title}
        </h1>

        <div className="text-md w-fit text-gray-400 border border-gray-300 p-1">
          {product.category}
        </div>
        <div className="flex gap-2 items-center">
          <FaStar color="#FFD801" size={15} />
          {/* TODO add more stars according to rating */}
          <p className="text-base">{product.rating.rate}</p>
        </div>

        <p className="text-md md:text-xl max-w-lg">{product.description}</p>

        <p className="text-2xl text-gray-500 font-medium">₹{product.price}</p>

        <div className="flex gap-5 flex-wrap">
          <Button variant="primary" text="Buy Now" />
          <Button
            variant="secondary"
            onClick={handleAddToCart}
            text="Add to Cart"
          />
        </div>

        <div>
          <h3 className="text-gray-600 my-3 italic">Reviews</h3>
          <div className="flex flex-col gap-3">
            {product.reviews.map((review, i) => (
              <Review
                key={i}
                name={review.user_name}
                text={review.short_review}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
