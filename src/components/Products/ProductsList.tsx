"use client";

import { Filters } from '@/interface';
import React, { useEffect, useState } from 'react'

export const ProductsList = ( { products , categories  } ) => {
  
    const [productsList, setProducts] = useState([]);
    const [categoriesList, setCategories] = useState([]);
    const [filters,SetFilters]=useState<Filters>({
        category:"All",
        title:"",
        priceLevel:"default",
    })

    const [page,setPage]=useState(1);

    useEffect(()=>{
        setProducts(products);
        setCategories(categories);
    },[products,categories])
  
  
    return (
    <div>{JSON.stringify(products)}</div>
  )
}
