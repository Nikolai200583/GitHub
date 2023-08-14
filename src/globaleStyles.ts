import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after { 
  box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;    
    cursor: pointer;
}

html,
body {
    width: 100%;
    height: 100%;    
    color: black;
}

button {
    cursor: pointer;
}

ul li {
  list-style: none;
}
`;
