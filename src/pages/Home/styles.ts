import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 16px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`
