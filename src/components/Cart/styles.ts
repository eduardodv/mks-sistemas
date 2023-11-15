import styled, { keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

const showDialog = keyframes({
  '0%': { right: '-100%' },
  '100%': { right: '0' },
})

export const DialogContent = styled(Dialog.Content)`
  max-width: 88vw;
  width: 30.3125rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['blue-500']};
  box-shadow: -5px 0 6px rgba(0, 0, 0, 0.13);

  &[data-state='open'] {
    animation: ${showDialog} 0.5s ease-in-out;
  }
`

export const DialogHeader = styled.div`
  padding: 2.1875rem 3.125rem;

  @media (max-width: 575.98px) {
    padding: 1.5625rem 2rem;
  }
`

export const DialogTitle = styled.div`
  position: relative;
  margin-bottom: 40px;

  h2 {
    font-size: ${(props) => props.theme.sizes['title-l']};
  }
`

export const DialogClose = styled(Dialog.Close)`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2;
  padding-bottom: 0.25rem;
  top: 0;
  right: -2.375rem;
  font-size: ${(props) => props.theme.sizes['title-l']};

  &:hover {
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 575.98px) {
    color: ${(props) => props.theme.colors['blue-500']};
    background: ${(props) => props.theme.colors.black};
    right: -1rem;
  }
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  max-height: calc(100svh - 340px);
  min-height: 160px;
  overflow: auto;
  padding: 0.3rem 0.9rem 0.3rem 0;
  margin-right: -1.3rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 575.98px) {
    max-height: calc(100svh - 290px);
  }
`

export const DialogFooter = styled.div``

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.5rem 2.625rem;
  font-weight: bold;
  font-size: ${(props) => props.theme.sizes['title-l']};

  @media (max-width: 575.98px) {
    padding: 0 2rem 2rem;
  }
`

export const FinalizeButton = styled.button`
  font-weight: bold;
  font-size: ${(props) => props.theme.sizes['title-l']};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  border: 0;
  width: 100%;
  padding: 1.875rem 0.9375rem;
  cursor: pointer;

  &:hover {
    background: #333;
  }

  @media (max-width: 575.98px) {
    font-size: 20px;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
  }
`

export const ErrorMessage = styled.div`
  padding: 15px 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);

  h4 {
    margin-bottom: 0.625rem;
  }
`
