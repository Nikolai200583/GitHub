import styled from "styled-components";

export const inputSearchContainer = styled.div`
   position:relative;
   width:560px; 
   display:flex;
   flex-direction: column;
   align-items: center;
         
`;
export const user = styled.ul ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3px
  `;

export const inputSearch = styled.input`
    margin-top: 10px;
    height: 40px;
    width: 400px;     
    background-color: #ffffff;
    ::placeholder {
    color: #111111;
  }
      
`;
