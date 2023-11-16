import * as Dialog from '@radix-ui/react-dialog'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  ErrorMessage,
  FinalizeButton,
  ListItems,
  Total,
} from './styles'
import { CartItem } from '../CartItem'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/CartItemContext'
import { formatMoney } from '../../utils/formatMoney'
import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import { AlertDialog } from '../AlertDialog'

export function Cart() {
  const { cartItems, resetCart, setOpen } = useContext(CartItemContext)

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0,
  )

  function handleSuccess() {
    resetCart()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2>
              Carrinho <br />
              de compras
            </h2>
            <DialogClose className="close-button">x</DialogClose>
          </DialogTitle>
          <ListItems>
            {!cartItems.length ? (
              <ErrorMessage>
                <h4>Ops, carrinho vazio!</h4>
                <span>
                  Volte para a listagem de produtos e adicione um ou mais itens.
                </span>
              </ErrorMessage>
            ) : (
              cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    brand={item.brand}
                    photo={item.photo}
                    price={item.price}
                    quantity={item.quantity}
                  />
                )
              })
            )}
          </ListItems>
        </DialogHeader>

        {cartItems.length > 0 && (
          <DialogFooter>
            <Total>
              <span>Total:</span>
              <span>R${formatMoney(totalPrice)}</span>
            </Total>
            <AlertDialogRadix.Root>
              <AlertDialogRadix.Trigger asChild>
                <FinalizeButton>Finalizar compra</FinalizeButton>
              </AlertDialogRadix.Trigger>
              <AlertDialog
                title="Tem certeza que deseja finalizar a compra?"
                actionButton={handleSuccess}
              />
            </AlertDialogRadix.Root>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog.Portal>
  )
}
