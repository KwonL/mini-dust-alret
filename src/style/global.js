import { createGlobalStyle } from 'styled-components'
import GmarketSansTTFMedium from '../assets/GmarketSansTTFMedium.ttf'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }

  @font-face {
      font-family: "GmarketSansTTFMedium";
      src: url(${GmarketSansTTFMedium}) format('truetype');
  }
`

export default GlobalStyle
