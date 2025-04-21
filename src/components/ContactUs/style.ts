import styled, { css } from 'styled-components'

type ButtonProps = {
  cursor: string
}

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 3rem;
    text-align: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};

    span {
      color: #fff;
      padding: 0.2rem 2rem 0.2rem 0.7rem;
      color: #8722cf;
      border-radius: 0.4rem;
      font-weight: ${theme.font.bold};
    }
    margin-bottom: 1rem;

    @media (max-width: 560px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.75rem;
    color: ${theme.colors.white};
    text-align: center;
    max-width:  800px;

    span {
      text-decoration: underline;
    }
    margin-bottom: 5rem;

    @media (max-width: 860px) {

      max-width: 80%;
   
    }
    @media (max-width: 560px) {
      margin: 0 auto;
      max-width: 80%;
      font-size: 1.4rem;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.purple};
    width: 90%;
    height: 10rem;
    border-radius: 0.4rem;
    padding: 0 2rem;

    @media (max-width: 560px) {
      margin: 2rem auto 0 auto;
      width: 90%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 14rem;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 60%;
    background-color: transparent;

    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #fff;
    padding: 0 0 1rem 1rem;
    font-size: ${theme.font.sizes.xsmall};

    &::placeholder {
      font-size: ${theme.font.sizes.xsmall};
      color: #fff;
    }

    @media (max-width: 560px) {
      &::placeholder {
        font-size: 1.2rem;
      }
      width: 90%;
      margin-bottom: 2rem;
    }
  `}
`

export const Button = styled.button<ButtonProps>`
  ${({ theme, cursor }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.background};
    justify-content: center;
    background-color: #fff;
    padding: 1rem 2rem;
    font-weight: ${theme.font.bold};
    border-radius: 0.4rem;
    border: none;
    cursor: ${cursor == 'true' ? 'not-allowed' : 'pointer'};
    span {
      margin-right: 1rem;
    }

    @media (max-width: 560px) {
      width: 100%;
      font-size: 1.4rem;
    }
  `}
`
export const Span = styled.span`
  font-weight: bold;
  
  padding: 0.5rem;
`
