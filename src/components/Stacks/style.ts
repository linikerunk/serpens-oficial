import styled, { keyframes, css } from 'styled-components'

import Stacks from '/public/image/stacks.png'

const slider = keyframes`
  to {
    background-position: 1500px;
  }
`

export const Wrapper = styled.div`
  padding: 0 2.75rem ;
`
export const StyleStack = styled.div`
  width: 95%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 2.5rem 0rem;
  box-shadow: rgb(0, 0, 0, 0.6) 0.1rem 0rem 3rem 0.1rem;
  border-radius: 0.5rem;


  @media (max-width: 560px) {
    box-shadow: 0rem 0rem;
    width: 100%;
  }
`

export const ImagesStacks = styled.div`
  padding: 3rem 0rem;
  background-size: cover;
  transition-duration: 3000s;
  background-image: url(${Stacks.src});
  animation: ${slider} 30s linear infinite;
`

export const Titlestack = styled.h1`
  ${({ theme }) => css`
    font-weight: 200;
    color: ${theme.colors.text};
    font-size: 4.5rem;
    text-align: center;
    padding-bottom:3rem;
  

    @media (max-width: 560px) {
      font-size: 2.5rem;
    }
    @media (max-width: 385px) {
      font-size: 2.2rem;
    }
  `}
`
export const SubtitleTask = styled.h1`
  ${({ theme }) => css`
    font-weight: 200;
    color: ${theme.colors.text};
    font-size: 2.75rem;
    text-align: left;
    padding-bottom:2.5rem ;

    @media (max-width: 560px) {
      font-size: 2.5rem;
    }
    @media (max-width: 385px) {
      font-size: 2.2rem;
    }
  `}
`
export const ParagraphGreen = styled.span`
  ${({ theme }) => css`
    /* background: linear-gradient(${theme.colors.purple_gradient}); */
    background: ${theme.colors.purple};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 600;

  
  `}
`
export const ParagraphWhite = styled.span`
  ${({ theme }) => css`
    /* background: linear-gradient(${theme.colors.purple_gradient}); */
    background: ${theme.colors.white};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 600;
    font-size: 2rem;
    

    @media (max-width: 860px) {
      font-size: 1.5rem;
    }
  `}
`
