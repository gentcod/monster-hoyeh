import styled from 'styled-components';

export const CardListContainer = styled.div`
   padding: 2rem;
   display: grid;
   grid-template-columns: auto auto auto auto;
   column-gap: 2rem;
   row-gap: 2rem;
   justify-content: center;
   align-content: center;
   margin: 0 auto;

   & {
      @media only screen and (max-width: 56.25em) {
         grid-template-columns: auto auto;
         row-gap: 1rem;
         column-gap: 1rem;
      }
   }
`