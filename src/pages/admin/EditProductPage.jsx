import { useNavigate, useParams } from 'react-router-dom'
import { ProductForm } from '@/components/forms/ProductForm'
import AdminLayout from '@/components/layout/AdminLayout'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { axiosInstance } from '@/lib/axios'

const EditProductPage = () => {

    const [product, setProduct] = useState({
        imageUrl:"",
        imageAlt:"",
        productName:"",
        productPrice:"",
        productStock : "",
        id: 0,
    });


    const params = useParams();

    const navigate = useNavigate()

    const fetchProduct = async () => {
        try {
            const response = await axiosInstance.get("/products/" + params.productId)

            setProduct(response.data)
        } catch (err) {
            console.log(err)
        }
    }


    const handleEditProduct = async (values) => {
        try {
            const response = await axiosInstance.patch("/products/" + params.productId,  {
                productName : values.productName,
                productPrice : values.productPrice,
                productStock : values.productStock,
                imageUrl : values.imageUrl,
            });
  
            alert("Product edited")
  
            navigate("/admin/product")
          } catch (err) {
              console.log(err)
          }
    };

    useEffect(() => {
        fetchProduct();
    }, [])

  return (
    <AdminLayout title="Edit Product" description="Editing Product">
        {
            product.id ? (
                <ProductForm 
                cardTitle={"Editing " + product.productName} 
                onSubmit={handleEditProduct}
                defaultName={product.productName} 
                defaultPrice={product.productPrice} 
                defaultStock={product.productStock} 
                defaultImageUrl={product.imageUrl} 
                />
            ) : null
        }
    </AdminLayout>
  )
}

export default EditProductPage
