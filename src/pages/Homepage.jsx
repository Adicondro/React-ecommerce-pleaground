import React, { useState } from 'react'
import ProductCard from '@/components/ProductCard';
import { axiosInstance } from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';




const Homepage = () => {

    const [productIsLoading, setProductIsLoading] = useState(false);
    const [products, setProducts] = useState([])

    const productsList = products.map((product) => {
        return(
          <ProductCard
            imageUrl = {product.imageUrl}
            imageAlt = {product.imageAlt}
            productName = {product.productName}
            productPrice = {product.productPrice}
            productStock = {product.productStock}
          />
        )
      })
      
      const fetchProducts = async () => {
        setProductIsLoading(true)
        try {
          const response = await axiosInstance.get("/products")
          console.log(response.data)
          setProducts(response.data)
        } catch (err) {
          console.log(err)
        } finally{
          setProductIsLoading(false)
        }
      }
      
      useEffect(() => {
        fetchProducts();
      },[])
      
      return (
        <>
            <main className='min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8'>
                <div className='pb-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    Become a Trendsetter with Us
                </h1>
                <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
                    Pleaground provides you with the finest interior and ensures your confidence throughout your days.
                </p>
                </div>

                {productIsLoading ? (
                  <p>Loading...</p>
                ) : (
                  <div className='grid grid-cols-2 gap-4'>
                  {productsList}
                  </div>
                )}

            </main>
        </>
      )
}

export default Homepage
