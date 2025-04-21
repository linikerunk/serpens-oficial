import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

type ImageProps = {
  image: string
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 110rem;
  height: 50rem;
  margin-top: 4rem;
  background-color: #fff;
  border-radius: 0.4rem;
  z-index: 1;

  @media (max-width: 560px) {
    width: 90%;
    flex-direction: column;
  }
`

export const ButtonClose = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ddd;
    border-radius: 50%;
  }

  @media (max-width: 560px) {
    img {
      padding: 0.3rem !important;
      background-color: #fff !important;
      border-radius: 0.4rem !important;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  flex: 1;

  p {
    margin: 1rem 0 3rem 0;
    text-align: center;
    max-width: 40rem;
  }
`

export const Image = styled.div<ImageProps>`
  ${({ theme, image }) => css`
    background-image: url(${image});
    flex: 1.5;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${theme.colors.text};
    background-size: contain;
  `}
`
