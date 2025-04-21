import exp from 'constants'
import styled, { css, keyframes } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.bakground_secundary};
    z-index: 0;
    margin: 5rem 0 ;
  `}
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem;

  @media (max-width: 768px) {
  }
  @media (max-width: 484px) {
    display: block;
    width: 100%;
  }
`

export const TextDiv = styled.div`
  width: 100%;

  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  padding-bottom: 2rem;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0, 0, 0, 0.4) 0.1rem 0rem 3rem 0.1rem;

  @media (max-width: 484px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`

export const TextSerpens = styled.div`
  ${({ theme }) => css`
    font-size: 2.5rem;
    color: ${theme.colors.text_gray_dark};
    font-weight: ${theme.font.normal};
    margin: 2rem 0.2rem;
    max-width: 700px;
    
    li{
      margin-bottom: 1.5rem;
    }

  `}
`

export const TheTypeServices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding-top: 9rem;
`

export const ContextService = styled.div`
  align-items: center;

  @media (max-width: 560px) {
    flex-wrap: wrap-reverse;
    display: flex;
  }
`

export const TitleGradient = styled.h1`
  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.purple_gradient});
    font-size: ${theme.font.sizes.xlarge};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    max-width: 43.4rem;
    line-height: 4rem;
    font-size: 5rem;

    span {
      -webkit-text-fill-color: black;
    }

    @media (max-width: 860px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      text-align: left;
      font-size: 4rem;
      margin: 4rem 0;
    }
  `}
`

export const Phrase = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    margin-bottom: 5rem;
    margin-top: 2rem;
    max-width: 41rem;

    span {
      font-weight: ${theme.font.bold};
      color: white;
    }

    @media (max-width: 820px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      display: none;
    }
  `}
`

// export const TheTypeServices = styled.div`
//   @media (max-width: 820px) {
//   }
// `

export const TypeServices = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 8rem;
  .cardDiv {
    background: transparent;
  }
  .card {
    background: rgba(0, 0, 0, 0.2);
  }
`

export const ContainerTypeServices = styled.div`
  align-items: center;
  display: flex;

  h1 {
    margin-right: 1rem;
    font-size: 1.563rem;
    padding: 5px;
  }
`
export const Span = styled.span`
  font-weight: bold;
`
