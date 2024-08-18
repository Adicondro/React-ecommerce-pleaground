import AdminLayout from '@/components/layout/AdminLayout'
import React, { useEffect, useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { axiosInstance } from '@/lib/axios'
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { useSearchParams } from 'react-router-dom'

const ProductManagementPage = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  

  const [products, setProducts] = useState([])

  const [hasNextPage, setHasNextPage] = useState(true)

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
          _per_page: 3,
          _page: Number(searchParams.get("page"))
        }
      });

      console.log(response.data)

      setHasNextPage(Boolean(response.data.next))

      setProducts(response.data.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(searchParams.get("page"))
    fetchProducts()
  }, [searchParams.get("page")])

  useEffect(() => {
    if(!searchParams.get("page")) {
      searchParams.set("page", 1)

      setSearchParams(searchParams);
    }
  }, [])
  
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
                      <Button variant="ghost" size="icon">
                        <Ellipsis className='w-6 h-6'/>
                      </Button>
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
              <Button disabled={searchParams.get("page") == 1 } onClick={handlePrevPage} variant="ghost"><ChevronLeft className='w-6 h-6 mr-2'/>Previous</Button>
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
