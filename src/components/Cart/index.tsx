import * as Dialog from '@radix-ui/react-dialog'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  FinalizeButton,
  ListItems,
  Total,
} from './styles'
import { CartItem } from '../CartItem'

export function Cart() {
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
            <CartItem />
            <CartItem />
          </ListItems>
        </DialogHeader>

        <DialogFooter>
          <Total>
            <span>Total:</span>
            <span>R$798</span>
          </Total>
          <FinalizeButton>Finalizar compra</FinalizeButton>
        </DialogFooter>
      </DialogContent>
    </Dialog.Portal>
  )
}
