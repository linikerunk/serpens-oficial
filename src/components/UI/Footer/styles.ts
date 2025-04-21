import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`

export const Logo = styled(Image)`
  @media (max-width: 560px) {
    display: none !important;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 5rem;

  @media (max-width: 560px) {
  }
`

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    .first {
      margin-bottom: 2rem;
      margin-right: 5rem;
    }
  }
`

export const Column = styled.dl`
  & + dl {
    margin-left: 5rem;
  }

  @media (max-width: 560px) {
    & + dl {
      margin-left: 0;
    }
  }

  @media (max-width: 390px) {
    & + dl {
      margin-top: 30px;
      margin-right: 30px;
    }
  }
`

export const Title = styled.dt`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray_dark};
  `}
`

export const Items = styled.dd`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.white};
    }
    color: #fff;
    margin-top: 1rem;
  `}
`

export const CopyRigth = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray_dark};
    padding-bottom: 3rem;
    font-size: 1.4rem;
  `}
`
