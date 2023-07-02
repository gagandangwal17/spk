import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin:0;
    padding:0;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyles;
