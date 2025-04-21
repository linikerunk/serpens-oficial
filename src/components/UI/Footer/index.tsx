import Image from 'next/image'

import Logo from '/public/image/logo.svg'

import * as S from './styles'
import Link from 'next/link'

export function Footer() {
  return (
    <S.Footer id="contato">
        <S.Wrapper>
          <S.Logo src={Logo} alt="Logo da serpens" width={120} height={25} />
          <S.Table>
            <S.Column className="first">
              <S.Title>Onde nos encontrar</S.Title>
              <S.Items className="em">serpens.helpers@gmail.com</S.Items>
              <S.Items>(12) 99112-0437</S.Items>
            </S.Column>
            <S.Column>
              <S.Title>Mapa do site</S.Title>
              <S.Items>
                <Link href="#servicos">Serviços</Link>
              </S.Items>
              <S.Items>
                <Link href="#portfolio">Portfólio</Link>
              </S.Items>
              <S.Items>
                <Link href="#contato">Contato</Link>
              </S.Items>
            </S.Column>
            <S.Column>
              <S.Title>Serviços</S.Title>
              <S.Items>
                <Link href="#">Criação de site</Link>
              </S.Items>
              <S.Items>
                <Link href="#">Identidade visual</Link>
              </S.Items>
              <S.Items>
                <Link href="#">Criação de bot</Link>
              </S.Items>
              <S.Items>
                <Link href="#">Criação de API</Link>
              </S.Items>
              <S.Items>
                <Link href="#">Web scraping</Link>
              </S.Items>
              <S.Items>
                <Link href="#">Pentest</Link>
              </S.Items>
              <S.Items>
                <Link href="#">Operação com dados</Link>
              </S.Items>
            </S.Column>
          </S.Table>
        </S.Wrapper>
        <S.CopyRigth>Serpens &copy; 2022</S.CopyRigth>
    </S.Footer>
  )
}
