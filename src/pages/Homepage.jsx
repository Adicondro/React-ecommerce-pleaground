import React from 'react'
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const productsRaw = [
  {
    imageUrl:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/220/1022005_PE832395_S5.jpg",
    imageAlt:"ALEX/LAGKAPTEN",
    productName:"ALEX/LAGKAPTEN",
    productPrice:"2.089.000",
    productStock:"13",
  },
  {
    imageUrl:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/436/1243689_PE920720_S5.jpg",
    imageAlt: "GRÖNSTA",
    productName:"GRÖNSTA",
    productPrice:"899.000",
    productStock:"4",
  },
  {
    imageUrl:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/093/0609306_PE684440_S5.jpg",
    imageAlt:"TERTIAL",
    productName:"TERTIAL",
    productPrice:"199.000",
    productStock:"100",
  },
  {
    imageUrl:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/419/1041907_PE841187_S5.jpg",
    imageAlt:"PÄRUP",
    productName:"PÄRUP",
    productPrice:"5.395.000",
    productStock:"0",
  },


]

const Homepage = () => {
    const products = productsRaw.map((product) => {
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
                <div className='grid grid-cols-2 gap-4'>
                {products}
                </div>
            </main>
        </>
      )
}

export default Homepage
