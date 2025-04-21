import exp from 'constants'
import styled, { css, keyframes } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.bakground_secundary};
  z-index: 0;
  display: flex;
  flex-direction: column;

  justify-content: center;
  `}
`

export const Services = styled.div`
  padding: 1.5rem;
  margin-top: 4rem;

  .carousel {
    margin: auto;

    width:  '80%';
  }

  @media (max-width: 768px) {
    .carousel {
      width: 100%; 
    }
  }
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

  .cardDiv{
    background:transparent;

  }
  .card{
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
