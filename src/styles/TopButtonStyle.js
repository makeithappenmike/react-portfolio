import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.section`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.section`
   width: 100%;
   left: 50%;
   bottom: 40px;
   height: 20px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color: #343a40;
   &:hover {
      color: #495057;
      cursor: pointer;
    }
`