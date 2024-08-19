import React from 'react'
import { Button } from '../ui/button';
import { CardContent, CardTitle, Card, CardHeader, CardFooter } from '../ui/card';
import { Form, FormDescription, FormItem, FormLabel, FormField, FormControl, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const productFormSchema = z.object({
    productName: z.
        string()
        .min(3, "Your product name is under 3 characters")
        .max(80, "Your product name is over 80 characters"),
    productPrice: z.coerce.number().min(10000, "Price cannot be under Rp 10.000"),
    productStock: z.coerce.number().min(1, "Stock cannot be under 1"),
    imageUrl: z.string().url("Use a Valid URL"),
});

export const ProductForm = (props) => {

    const { onSubmit, cardTitle, defaultName, defaultPrice, defaultStock, defaultImageUrl } = props;
  
    const form = useForm({
        defaultValues: {
            productName: defaultName || "",
            productPrice: defaultPrice || 0,
            productStock: defaultStock || 0,
            imageUrl: defaultImageUrl || "",
        },
        resolver: zodResolver(productFormSchema)
    })
  
    return (
    
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-w-[540px] w-full'>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-semibold">{cardTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <FormField
                            control={form.control}
                            name= "productName"
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Product name has to be between 3 and 80 characters
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        
                        />
                        <FormField
                            control={form.control}
                            name= "productPrice"
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Price</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        
                        />
                        <FormField
                            control={form.control}
                            name= "productStock"
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Stock</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        
                        />
                        <FormField
                            control={form.control}
                            name= "imageUrl"
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Image</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please use a valid image url
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
  )
}

