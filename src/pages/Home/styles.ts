import styled from 'styled-components'

export const ListProducts = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 1.375rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 4.375rem 1.25rem;

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    padding-top: 1.125rem;
    padding-bottom: 2.5rem;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    padding-top: 7.25rem;
    padding-bottom: 7.25rem;
  }
`
