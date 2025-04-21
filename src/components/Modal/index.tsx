import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import theme from '../../styles/theme'
import { LinkButton } from '../UI/Button'
import * as S from './styles'
import IconClose from '/public/image/close.svg'

interface ModalProps {
  infoModal: any
  setInfoModal: Dispatch<SetStateAction<null | any>>
}

export function Modal({ setInfoModal, infoModal }: ModalProps) {
  const { name, image, description, link } = infoModal

  return (
    <S.Wrapper>
      <S.Card>
        <S.ButtonClose onClick={() => setInfoModal(null)}>
          <Image
            src={IconClose}
            width={20}
            height={20}
            alt="Botao para fechar o modal"
          />
        </S.ButtonClose>
        <S.Image image={image} />
        <S.Infos>
          <h1>{name}</h1>
          <p>{description}</p>

          <LinkButton
            link={link}
            target="_blank"
            color={theme.colors.purple_gradient}
          >
            Veja o preview
          </LinkButton>
        </S.Infos>
      </S.Card>
      <S.Overlay onClick={() => setInfoModal(null)} />
    </S.Wrapper>
  )
}
