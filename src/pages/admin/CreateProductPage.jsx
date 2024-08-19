import AdminLayout from '@/components/layout/AdminLayout'
import { axiosInstance } from '@/lib/axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductForm } from '@/components/forms/ProductForm';


const CreateProductPage = () => {

    const navigate = useNavigate();


    const handleCreateProduct = async (values) => {
        try {
          await axiosInstance.post("/products", values);

          alert("Product created")

          navigate("/admin/product")
        } catch (err) {
            console.log(err)
        }
    }

  return (

    <AdminLayout title="Create Products" description="Add New Products">
        <ProductForm cardTitle="Create Product" onSubmit={handleCreateProduct}/>
    </AdminLayout>

  )
}

export default CreateProductPage
