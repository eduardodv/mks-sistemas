import { toast } from 'react-hot-toast'

import { CloseButton, Title, ToastContainer } from './styles'

interface ToastProps {
  id?: string
  boldTitle?: string
  title: string
  isDismissible?: boolean
}

export function Toast({ id, boldTitle, title, isDismissible }: ToastProps) {
  return (
    <ToastContainer $spacing={!!isDismissible}>
      <Title>
        <strong>{boldTitle} </strong>
        {title}
      </Title>
      {isDismissible && (
        <CloseButton onClick={() => toast.dismiss(id)}>x</CloseButton>
      )}
    </ToastContainer>
  )
}
