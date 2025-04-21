import * as S from './style'
import React from 'react'
import TypeServices from './Card'
import { Titlestack, SubtitleTask } from '../../Stacks/style'
import * as Ss from '../../Stacks/style'

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const NosSection = () => {
  return (
    <S.Section id="nos">
      <Titlestack>
        A equipe da <Ss.ParagraphGreen> Serpens</Ss.ParagraphGreen> está sempre
        <br /> buscando a melhor solução.
      </Titlestack>

      <S.ContentContainer>
        <S.TextDiv>
      
          <S.TextSerpens>
            <ul>
              <li>

                Missão: Desvendar o potencial da tecnologia para solucionar
                desafios modernos de forma eficiente e rápida.
              </li>
              <li>
                Especializados em desenvolvimento de sites, aplicações e
                sistemas centrados no usuário.
              </li>
              <li>
                Tecnologia como força propulsora da inovação e transformação.
              </li>
              <li>
                Abordagem centrada no usuário para antecipar demandas futuras.
              </li>
              <li>
                Compromisso com soluções digitais eficientes e ágeis na era da
                informação.
              </li>
              <li>
                Fornecimento de serviços de alta qualidade de forma rápida e
                eficiente.
              </li>
              <li>
                Junte-se a nós para um mundo digital mais eficiente e centrado
                no usuário.
              </li>
              <li>
                Tecnologia é nossa paixão, sua satisfação é nossa prioridade.
              </li>
              <li>
                Transforme desafios em soluções digitais para impulsionar o
                sucesso de sua empresa.
              </li>
            </ul>
          </S.TextSerpens>
        </S.TextDiv>
      </S.ContentContainer>
    </S.Section>
  )
}

export default NosSection
