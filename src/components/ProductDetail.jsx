import axios from 'axios'
import React, { useEffect } from 'react'
import { PRODUCT_URL } from '../constants'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectProduct } from '../redux/actions/productAction'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  // console.log(productId)
  const { product } = useSelector(state => state.allProducts)
  
  const fetchProductDetail = async () => {
    try {
      const {data} = await axios.get(`${PRODUCT_URL}/${productId}`)
      // console.log(data)
      dispatch(selectProduct(data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect (() => {
    if (productId && productId !== "")
      fetchProductDetail(productId)
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div>
      {
        Object.keys(product).length === 0 ? (<div>...Loading</div>) : (
          <div style={
            {display: 'flex',
            gap: 10
          }}>
            <div style={{
              flex: 1,
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img style={{
                width: 500,
                height: 500,
            }} src={product?.image} alt="" /></div>
            <div style={{flex: 1}}>
              <h1>{product?.title}</h1>
              <p>{product?.price} $</p>
              <p>{product?.description}</p>
              <button>Add to cart</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductDetail