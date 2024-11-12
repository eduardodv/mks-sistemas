import { ProductItem } from './components/ProductItem'
import { ListProducts, ResponseError } from './styles'
import { useQuery } from 'react-query'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Toaster, toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'

interface ProductProps {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
}

export function Home() {
  const [responseError, setResponseError] = useState('')

  const { data, isLoading } = useQuery('products', () => {
    return axios
      .get('/api/products.json')
      .then((response) => response.data)
      .catch((error) => setResponseError(error.message))
  })

  useEffect(() => {
    toast.remove()
  }, [])

  return (
    <main>
      {responseError ? (
        <ResponseError>{responseError}</ResponseError>
      ) : (
        <ListProducts>
          {isLoading ? (
            <>
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
              <Skeleton height={315} borderRadius={8} />
            </>
          ) : (
            data?.products.map((item: ProductProps) => {
              return (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  description={item.description}
                  photo={item.photo}
                  price={item.price}
                />
              )
            })
          )}
        </ListProducts>
      )}
      <Toaster position="bottom-right" />
    </main>
  )
}
