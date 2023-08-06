import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  color: #27374D;
    margin: 0;
    font-family: 
};

p {
  margin: 0;
};

ul,
ol,
a {
  margin: 0;
  padding: 0;
  list-style: none;
};

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`