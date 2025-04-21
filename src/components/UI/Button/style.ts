import styled, { css } from 'styled-components'

type ButtonProps = {
  colorButton: string
  calcButton?: number
}

export const ContainerButton = styled.div`
  display: flex;
`

export const LinkButton = styled.a<ButtonProps>`
  ${({ theme, colorButton }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(${colorButton});
    font-weight: ${theme.font.bold};
    border-radius: 0.4rem;
    padding: 0.7rem 2rem;
    color: #fff;
    cursor: pointer;

    span {
      margin-right: 1rem;
    }
  `}
`

export const Button = styled.button<ButtonProps>`
  ${({ theme, colorButton, calcButton }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
    background: ${colorButton === theme.colors.purple_gradient
      ? `linear-gradient(${colorButton})`
      : colorButton};
    border-radius: 0.4rem;
    padding: 1rem ${calcButton ? `calc(2rem + ${calcButton}rem)` : `2rem`};
    border-style: none;
    color: #fff;
    cursor: pointer;

    span {
      margin-right: 1rem;
    }
  `}
`
