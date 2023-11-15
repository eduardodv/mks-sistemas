import { ProductItem } from './components/ProductItem'
import { ListProducts } from './styles'
import { useQuery } from 'react-query'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Toaster, toast } from 'react-hot-toast'
import { useEffect } from 'react'

interface ProductProps {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
}

export function Home() {
  const { data, isLoading } = useQuery('products', () => {
    return axios
      .get(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
      )
      .then((response) => response.data)
  })

  useEffect(() => {
    toast.remove()
  }, [])

  return (
    <main>
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
      <Toaster position="bottom-right" />
    </main>
  )
}
