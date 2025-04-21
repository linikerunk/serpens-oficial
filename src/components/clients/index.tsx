import * as S from './style'

export function Clients() {
  return (
    <>
      <S.Titlestack>
        Esses são alguns de nossos{' '}
        <S.ParagraphGreen> clientes</S.ParagraphGreen>
      </S.Titlestack>
      <S.StyleStack>
        <S.Wrapper>
          <S.ImagesStacks>
           <img src="image/clientes.png" alt="clientes" />
          </S.ImagesStacks>
        </S.Wrapper>
      </S.StyleStack>
    </>
  )
}
