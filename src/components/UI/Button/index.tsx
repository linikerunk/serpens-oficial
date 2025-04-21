import { ReactNode } from 'react'
import * as S from './style'

export function LinkButton({
  children,
  link,
  color,
  target
}: {
  children: ReactNode
  link: string
  color: string
  target?: string
}) {
  return (
    <S.ContainerButton>
      <S.LinkButton
        colorButton={color}
        target={target}
        role="button"
        href={link}
      >
        {children}
      </S.LinkButton>
    </S.ContainerButton>
  )
}

export function Button({
  children,
  color,
  calc
}: {
  children: ReactNode
  color: string
  calc?: number
}) {
  return (
    <S.ContainerButton>
      <S.Button colorButton={color} calcButton={calc}>
        {children}
      </S.Button>
    </S.ContainerButton>
  )
}
