import { Button } from '@/components/ui/button'
import { icons } from 'lucide-react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { useState, useEffect } from 'react';
import React from 'react';

const ProductCard = (props) => {
  const {imageUrl, imageAlt, productName, productPrice, productStock} = props;

  const addtoCart = () => {
    alert("Items Added")
  }

  // Props dipakai ketika data nya berubah ubah
  

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if(quantity < productStock){
      setQuantity(quantity + 1);
    }
  }

  const decrementQuantity = () => {
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  }

  // // MOUNT
  // useEffect(() => {
  //   alert("Component did Mount")
  // }, []);

  // // UPDATE/MOUNT
  // useEffect(() => {
  //   alert("Component did Update")
  // }, [quantity])

  // useEffect(() => {
    
  //   // Unmount
  //   return () => {
  //     alert("Component Unmount")
  //   }
  // })




  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
    <div className="aspect-square w-full overflow-hidden">
      <img className='w-full' src={imageUrl} alt={imageAlt} />
    </div>

    <div className='py-4'>
      <p className='text-md'>{productName}</p>
      <p className='text-xl font-semibold mt-4'>Rp. {productPrice.toLocaleString("id-ID")}</p>
      <p className='text-muted-foreground text-sm mt-1'>In Stock : {productStock}</p>
    </div>

    <div className='flex flex-col gap-2'>
      <div className="flex justify-between items-center">
        <Button disabled={quantity <= 0} onClick={decrementQuantity} size="icon" variant="ghost">
          <IoIosRemove className='w-6 h-6'/>
        </Button>
        
        <p className='text-lg font-bold'>{quantity}</p>

        <Button disabled={quantity >= productStock} onClick={incrementQuantity} size="icon" variant="ghost">
          <IoIosAdd className='w-6 h-6'/>
        </Button>
      </div>

      <Button
      disabled={productStock <= 0}
      onClick={addtoCart}
      className='w-full'
      >
        {
          productStock > 0 ? "Add to Cart" : "Out of Stock"
        }
      </Button>
    </div>
  </div>
  )
}

export default ProductCard;
