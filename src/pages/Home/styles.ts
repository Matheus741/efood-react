import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px; 
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px); 
  justify-content: space-between;          
  gap: 32px;

  list-style: none;
  padding: 0;
  margin: 0;
`