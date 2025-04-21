import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 1.1rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.scrollbar_track_background};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.purple};
      border-radius: 0.8rem;
    }

    body {
      font-size: 1.6rem;
      background-color: ${theme.colors.background};
      font-family: ${theme.font.family};
      color: ${theme.colors.white};
      overflow-x: hidden !important;
    }

    html {
      scroll-padding-top: 10rem;
      scroll-behavior: smooth;
      font-size: 62.5%;
    }

  
    a {
      text-decoration: none;
    }
    img {
      display: block;
    }
  `} 

`

// export const ContainerLarger = styled.div`
//   max-width: 170rem;
//   margin: 0 auto;
//   width: 90%;
// `

// export const ContainerSmall = styled.div`
//   max-width: 170rem;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0px;
//   padding-top: 0px;

//   @media (max-width: 1000px) {
//     width: 120%;
//   }
// `
