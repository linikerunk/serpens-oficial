import { FC } from 'react';
import * as S from './style'

interface PropsCard { 
  image: string,
  title: string,
  description: string,
  link: string,

}

const CardPortfolio: FC<PropsCard> = ({description,image,link, title}) => {
  return(
    <S.CardContainer>
      <S.CardImage>
        <S.Image src={image} >

        </S.Image>
       
      </S.CardImage>
      <S.TextArea >
        <S.Title>
            {title}
        </S.Title>
        <S.Description>
            {description}
        </S.Description>
        <S.DivLink>


        <S.Link href={link} target='blank'>
          Ver Site
        </S.Link>
        </S.DivLink>
      </S.TextArea>

      
    </S.CardContainer>
  )
}
 
export default CardPortfolio;