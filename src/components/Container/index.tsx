import * as S from './style'
interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
   return <S.Wrapper>{children}</S.Wrapper>
}
