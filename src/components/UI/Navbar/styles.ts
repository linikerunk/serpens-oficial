import styled, { css } from 'styled-components'

type HeaderProps = {
  isScrolled: boolean
}

export const Header = styled.header<HeaderProps>`
  ${({ theme, isScrolled }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    
    background-color: ${isScrolled ? theme.colors.header : 'transparent'};
    transition: all 0.3s ease-out;
    z-index: 100;

    position: fixed;
    top: 0;
    right: 0;
    height: 8rem;
  `}
`
export const DivNav = styled.div`
  width: 100%;
  display: flex ;
  padding: 0 1.73em;
  justify-content: space-between;
`
export const LogoSerpens = styled.a`
  margin-top: 1rem;
  
 
`
export const BCTA = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 430px) {
    
      display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 860px) {
    display: none;
    height: 50%;
  }
`



export const MobileWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.4s cubic-bezier(0.38, 0.91, 0.49, 1.1);
    align-items: center;
    justify-content: center;
    transform: translate3d(-600px, 0, 0);
    opacity: 0;
    background: ${theme.colors.text};
    z-index: -1;
    &.menu_active {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    @media (max-width: 860px) {
      display: flex;
    }
  `}
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const MenuHamb = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: flex;
  }
`

type MobileGloboProps = {
  isMenuOpen: boolean
}
export const MobileGlobo = styled.a<MobileGloboProps>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  margin-right: 30px;
`
export const MobileItems = styled.ul`
  display: inline-block;
  list-style: none;
`

export const MobileItem = styled.li`
  ${({ theme }) => css`
    margin: 50px 0;
    a {
      color: black;
    }
    font-size: 2rem;
    text-align: center;
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    & + li {
      margin-left: 3.2rem;
    }

    a {
      color: #fff;
      font-size: ${theme.font.sizes.xsmall};
    }

    @media(min-width:1024px){
      a{
        font-size: 2.2rem;
      }
    }
    `}
    `

export const GloboLanguage = styled.a`
  display: flex;
`

export const Button = styled.a`
  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.purple_gradient});
    padding: 0.7rem 2rem;
    border-radius: 0.4rem;
    font-weight: ${theme.font.bold};
    color: #fff;
  `}
`
