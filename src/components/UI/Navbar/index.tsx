import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import IconMenu from '/public/image/hamburguer.svg'
import ArrowRigth from '/public/image/arrowrigthwhite.svg'

import Logo from '/public/image/logo.svg'
import Globo from '/public/image/globo_linguagens.svg'

import * as S from './styles'
import { LinkButton } from '../Button'
import { Container } from '../../Container'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [changeColor, setChangeColor] = useState(false)

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible')
  }, [isMenuOpen])

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 20) {
        setChangeColor(true)
      } else {
        setChangeColor(false)
      }
    }

    window.addEventListener('scroll', scroll)

    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return (
    <Container>
      <S.Header isScrolled={changeColor}>
        <S.DivNav>
          <S.LogoSerpens href="#">
            <Image src={Logo} alt="Imagem da serpens" width={150} height={30} />
          </S.LogoSerpens>
          <S.Nav>
            <S.List>
              <S.Item>
                <Link href="#servicos" className='txt'>Soluções</Link>
              </S.Item>
              <S.Item>
                <Link href="#portfolio" className='txt'>Portfólio</Link>
              </S.Item>
              <S.Item>
                <Link href="#nos" className='txt'>Quem somos</Link>
              </S.Item>
              
              <S.Item>
                <Link href="#contato" className='txt'>Suporte</Link>
              </S.Item>
              <S.Item>
                <S.GloboLanguage href="#">
                  <Image
                    src={Globo}
                    alt="Imagem de um globo"
                    width={20}
                    height={20}
                  />
                </S.GloboLanguage>
              </S.Item>
            </S.List>
          </S.Nav>

          <S.BCTA>
            <S.Button className="buttonCTANav" href="#orcamento">
              Solicitar orçamento
            </S.Button>
          </S.BCTA>

          <S.MenuHamb onClick={() => setIsMenuOpen((prev) => !prev)}>
            <S.MobileGlobo isMenuOpen={isMenuOpen} href="#">
              <Image
                src={Globo}
                alt="Imagem de um globo"
                width={20}
                height={20}
              />
            </S.MobileGlobo>
            <Image
              style={{
                filter: `${isMenuOpen ? 'invert(1)' : 'invert(0)'}`,
                width: '80%'
              }}
              className="hamburguer"
              src={IconMenu}
              alt="icone para abrir o menu"
            />
          </S.MenuHamb>

          <S.MobileWrapper
            id="hmocIu"
            className={isMenuOpen ? 'menu_active' : ''}
          >
            <S.MobileItems>
              <S.MobileItem onClick={() => setIsMenuOpen(false)}>
                <Link href="#servicos">serviços</Link>
              </S.MobileItem>
              <S.MobileItem onClick={() => setIsMenuOpen(false)}>
                <Link href="#portfolio">portfolio</Link>
              </S.MobileItem>
              <S.MobileItem onClick={() => setIsMenuOpen(false)}>
                <Link href="#contato">contato</Link>
              </S.MobileItem>

              <S.MobileItem onClick={() => setIsMenuOpen(false)}>
                <LinkButton color="transparent" link="#orcamento">
                  <span>solicitar orçamento</span>
                  <Image
                    src={ArrowRigth}
                    alt="seta para a direita"
                    width={10}
                    height={15}
                  />
                </LinkButton>
              </S.MobileItem>
            </S.MobileItems>
          </S.MobileWrapper>
        </S.DivNav>
      </S.Header>
    </Container>
  )
}
