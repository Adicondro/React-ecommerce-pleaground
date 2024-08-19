import AdminLayout from '@/components/layout/AdminLayout'
import React, { useEffect, useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ChevronLeft, ChevronRight, Edit, Ellipsis, Trash } from 'lucide-react'
import { axiosInstance } from '@/lib/axios'
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { Link, useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'

const ProductManagementPage = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  

  const [products, setProducts] = useState([])

  const [hasNextPage, setHasNextPage] = useState(true)
  const [productName, setProductName] = useState("")

  const handleNextPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) + 1)

    setSearchParams(searchParams);
  }

  const handlePrevPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) - 1)

    setSearchParams(searchParams);
  }

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _per_page: 4,
          _page: Number(searchParams.get("page")),
          productName: searchParams.get("search"), // Kalau ini kosong, dia gak akan menfilter
        }
      });

      console.log(response.data)

      setHasNextPage(Boolean(response.data.next))

      setProducts(response.data.data)
    } catch (err) {
      console.log(err);
    }
  }

  const searchProduct = () => {
    if(productName) {
      searchParams.set("search", productName)

      setSearchParams(searchParams);
    } else {

      searchParams.delete("search");

      setSearchParams(searchParams);
    }
  }

  const handleDeleteProduct = async (productId) => {
    const shouldDelete = confirm("Are you sure you want to delete this product?")

    if (!shouldDelete) return;

    try {
      await axiosInstance.delete("/products/" + productId)

      alert("Product Deleted")

      fetchProducts();
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(searchParams.get("page"))
    fetchProducts()
  }, [searchParams.get("page"), searchParams.get("search")])

  useEffect(() => {
    if(!searchParams.get("page")) {
      searchParams.set("page", 1)

      setSearchParams(searchParams);
    }
  }, [])
  
  return (
    <div className='mb-8'>
      <AdminLayout 
      title="Product Management Page" 
      description="Managing our products"
      rightSection={
        <Link to="/admin/product/create">
          <Button>
              <IoAdd className='h-6 w-6 mr-2'/>
                  Add Product
          </Button>
        </Link>
      }
      > 
        <div className='flex gap-4 mb-6'>
          <Input 
          value={productName} 
          onChange={e => setProductName(e.target.value)} 
          className="max-w-[400px]" 
          placeholder="Search Product Name"/>
          <Button onClick={searchProduct}>Search</Button>
        </div>
        <Table className="p-4 border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              products.map((product) => {
                return(
                  <TableRow>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>Rp {product.productPrice}</TableCell>
                    <TableCell>{product.productStock}</TableCell>
                    <TableCell>
                      <div className="flex gap-4">
                        <Link to={"/admin/product/edit/" + product.id}>
                          <Button variant="ghost" size="icon">
                            <Edit className='w-6 h-6'/>
                          </Button>
                        </Link>

                        <Button onClick={() => handleDeleteProduct(product.id)} variant="destructive" size="icon">
                          <Trash className='w-6 h-6' />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <Button 
              disabled={searchParams.get("page") == 1 } 
              onClick={handlePrevPage} 
              variant="ghost"><ChevronLeft 
              className='w-6 h-6 mr-2'/>Previous</Button>
            </PaginationItem>
            
            <PaginationItem className="mx-8 font-semibold">
              Page {searchParams.get("page")}
            </PaginationItem>


            <PaginationItem>
              <Button disabled={!hasNextPage} onClick={handleNextPage} variant="ghost"><ChevronRight className='w-6 h-6 mr-2'/>Next</Button>
            </PaginationItem>


          </PaginationContent>
        </Pagination>
        
      </AdminLayout>
    </div>
  )
}

export default ProductManagementPage
