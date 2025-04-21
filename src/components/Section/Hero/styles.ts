import styled, { css } from 'styled-components'

type ButtonProps = {
  cursor: string
  color: string
}

export const Main = styled.div`
  background-image: url('./image/hero-bg.webp');
  width: 100%;
  height: 85vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media(max-width:780px){
    height: 95vh;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2.5em;
  flex-direction: row;

  @media (max-width: 860px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 430px) {
    margin-top: 6.75rem;
    justify-content: center;
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  @media (max-width: 860px) {
    font-size: 4rem;
  }
`
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 0.4rem;
    padding-bottom: 2rem;

    max-width: calc(40rem + 20px);
    color: black;
    position: relative;
    z-index: 1;
    transform: scale(1.1);
    color: white;
    filter: drop-shadow(2px 4px 6px black);
  `}

  @media (max-width: 430px) {
    width: 100%;
    padding: 1rem;
    z-index: 0;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4.3rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    line-height: 4.25rem;

    span {
      font-weight: ${theme.font.bold};
      color: #8722cf;
    }

  

    @media (min-width: 768px) {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */

  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}
      @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #8722cf;
      }
    }
    }
    @media (max-width: 860px) {
      font-size: 4rem;
    }
    @media (max-width: 430px) {
      font-size: 3rem;
      line-height: 2.5rem;
      padding-bottom: 0.5rem;
    }
  `}
`
export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    padding: 1rem 0;
    max-width: 700px;

    span {
      font-weight: ${theme.font.bold};
      color: #8722cf;
    }

    @media (max-width: 860px) {
      font-size: 2.5rem;
      padding: 0.75rem;
    }

    @media (max-width: 560px) {
      text-align: left;
    }

    @media (max-width: 430px) {
      font-size: 1.75rem;
      text-align: left;
      padding: 1rem 0;
    }
  `}
`

export const Button = styled.button<ButtonProps>`
  ${({ theme, cursor, color }) => css`
    cursor: ${cursor == 'true' ? 'not-allowed' : 'pointer'};

    background: ${color == theme.colors.purple_gradient
      ? `linear-gradient(${theme.colors.purple_gradient})`
      : color};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    align-items: center;
    margin-right: 1rem;
    display: flex;

    border-radius: 0.4rem;
    padding: 1rem 8.8rem;
    border: none;

    span {
      margin-right: 0.6rem;
    }

    @media (max-width: 430px) {
      padding: 1rem 2rem;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    background: transparent;

    padding-bottom: 1rem;
    border-bottom: 1px solid #cfcfcf;
    margin: 1.75rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    width: 97%;
    color: white;

    :focus {
      outline: none;
    }
    :placeholder {
      color: black;
    }
  `}
  @media (max-width: 430px) {
    margin: 1rem 0;
  }
`
