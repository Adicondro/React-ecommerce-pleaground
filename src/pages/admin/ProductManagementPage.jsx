import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'
import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/ui/button'

const ProductManagementPage = () => {
  return (
    <div>
      <AdminLayout 
      title="Product Management Page" 
      description="Managing our products"
      rightSection={
        <Button>
            <IoAdd className='h-6 w-6 mr-2'/>
                Add Product
        </Button>
      }
      > 
        <h1>Product Management Page Content</h1>
        </AdminLayout>

    </div>
  )
}

export default ProductManagementPage
