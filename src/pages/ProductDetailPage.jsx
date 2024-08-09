import { Button } from '@/components/ui/button'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { useState, useEffect } from 'react'
import React from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useParams } from 'react-router-dom'

const product = {
    imageUrl:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/220/1022005_PE832395_S5.jpg",
    imageAlt:"ALEX/LAGKAPTEN",
    productName:"ALEX/LAGKAPTEN",
    productPrice:"2.089.000",
    productStock : "13",
    id: 1
}

const ProductDetailPage = () => {

    const params = useParams()
    const [quantity, setQuantity] = useState(0);


  return (
    <main className='min-h-screen max-w-screen-lg mx-auto px-4 mt-8'>
        <div className="grid grid-cols-2 gap-8">
            <img src={product.imageUrl} alt={product.imageAlt} className='w-full' />

            <div className='flex flex-col gap-1 justify-center'>
                <h1 className='text-x1'>{product.name} {params.productId}</h1>
                <h3 className='text-3xl font-bold'>Rp {product.productPrice}</h3>
                
                <p className='text-sm text-muted-foreground mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod ab porro iusto harum vero explicabo? Sequi placeat accusantium veritatis ab odit, hic at voluptatem esse, consectetur est nam saepe beatae expedita reiciendis, eius atque maxime recusandae! Deserunt, doloremque modi, culpa consequatur provident illum et alias hic autem assumenda impedit.
                </p>

                <div className="flex items-center gap-3 mt-6">
                    <Button 
                        size="icon" 
                        variant="ghost"
                    >

                        <IoIosRemove className='w-6 h-6'/>
                    </Button>
                    
                    <p className='text-lg font-bold'>{quantity}</p>

                    <Button 
                        size="icon" 
                        variant="ghost"
                    >
                    
                        <IoIosAdd className='w-6 h-6'/>
                    
                    </Button>
                </div>

                <div className="flex items-center mt-8 gap-4">
                    <Button className="w-full" size="lg">
                        Add to Cart
                    </Button>
                    <Button size="icon" variant="ghost">
                        <IoHeartOutline className='h-6 w-6'/>
                    </Button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProductDetailPage
