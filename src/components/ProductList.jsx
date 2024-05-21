import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCT_URL } from '../constants'
import { setProducts } from '../redux/actions/productAction'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.allProducts)
  // console.log(products)

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(PRODUCT_URL)
      // console.log(data)
      dispatch(setProducts(data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {
        products.length === 0 ? (<div>...Loading</div>) : (
          <div className='product-list-container'>
            {
              products.map(product => {
                const { id, description, price, image } = product
                return (
                  <Link to={`/${id}`} key={id} className='product-item'>
                    <img style={{
                      width: 200,
                      height: 200
                    }} src={image} alt="" />
                    <p>{price} $</p>
                    <p>{description}</p>
                  </Link>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default ProductList