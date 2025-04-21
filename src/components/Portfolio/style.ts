import styled, { css } from 'styled-components'

type ImageProps = {
  image: string
}

type ButtonProps = {
  cursor: string
  color: string
}

export const Section = styled.section`
  margin-top: 8rem;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;


`
export const Content  = styled.div`
margin: 8rem 0;
`

export const CardContainer = styled.div`

  width: 100%;
 
  padding: 1.75rem;
  

  @media (max-width: 860px) {
    display: block;
  }

  @media (max-width: 560px) {
  }

  @media (max-width: 430px) {
  }
`
export const CardImage = styled.div`
  width: 100%;
  height: auto;


  @media (max-width: 860px) {
    width: 100%;
  }

  @media (max-width: 560px) {
    text-align: left;
  }

  @media (max-width: 430px) {
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0 ;
  box-shadow: rgb(0, 0 , 0, 0.4 ) 0.1rem 0rem 3rem 0.1rem;
`
export const TextArea = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgb(0, 0 , 0, 0.4 ) 0.1rem 0rem 3rem 0.1rem;
  text-align: left;
  padding: 1.75rem;
  border-radius: 0 0  0.5rem 0.5rem;
  min-height: 250px;

  @media (max-width: 860px) {
    width: 100%;
   
  }

  @media (max-width: 430px) {
    text-align: left;
    padding: 1rem 2rem;
  }
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 4.25rem;

    @media (max-width: 860px) {
      font-size: 2.5rem;
    }
    @media (max-width: 430px) {
      font-size: 3rem;
      line-height: 2.5rem;
      padding-bottom: 0.5rem;
    }
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.75rem;
    color: ${theme.colors.text_gray_dark};
    font-weight: ${theme.font.normal};
    margin: 2rem 0.2rem;
    //padding: 1rem 0;
    max-width: 700px;

    @media (max-width: 860px) {
      font-size: 1.5rem;
      margin: 0.5rem;
    }

    @media (max-width: 560px) {
      text-align: left;
    }

    @media (max-width: 430px) {
      font-size: 1.5rem;
      text-align: left;
      padding: 1rem 0;
    }
  `}
`

export const DivLink = styled.div`
  margin-top: 5rem;

  @media (max-width: 860px) {
    margin: 1.75rem 0;
  }

  @media (max-width: 560px) {
    text-align: left;
  }

  @media (max-width: 430px) {
    font-size: 1.75rem;
    text-align: left;
    padding: 1rem 0;
  }
`

export const TitlePortfolio = styled.h1`
  ${({ theme }) => css`
    font-weight: 200;
    color: ${theme.colors.text};
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 10px;
    padding-bottom: 5rem;
  `}
`

export const Link = styled.a`
  margin-top: 5rem;
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.purple};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    border-radius: 0.4rem;
    padding: 1rem 7rem;
    border: none;

    @media (max-width: 430px) {
      padding: 1rem 2rem;
    }
  `}
`
