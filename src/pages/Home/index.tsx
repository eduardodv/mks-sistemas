import { ProductItem } from './components/ProductItem'
import { ListProducts } from './styles'

export function Home() {
  const products = [
    {
      id: 0,
      name: 'Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 1,
      name: 'a',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 2,
      name: 'Macbook Pro lorem ipsum dolor',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 3,
      name: 'Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 4,
      name: 'Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 5,
      name: 'Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 6,
      name: 'Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
    {
      id: 7,
      name: 'Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 2499,
    },
  ]

  return (
    <main>
      <ListProducts>
        {products.map((item) => {
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
        })}
      </ListProducts>
    </main>
  )
}
