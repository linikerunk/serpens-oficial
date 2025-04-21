import CardPortfolio from './card'
import * as S from './style'

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import * as Ss from '../Stacks/style'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Clients } from '../clients'

export function Portfolio() {
  return (
    <S.Section id="portfolio">
      <Ss.Titlestack>
        Alguns de nossos Portfolios que estão no ar
      </Ss.Titlestack>
      <S.Content>
        <Swiper
          autoHeight
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
              navigation: true
            },
            '@1.00': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '@1.50': {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <CardPortfolio
              description="O direito prático tem a missão de democratizar o acesso ao Direito em todo Brasil, onde a serpens está atuando no core que é a assinatura digital dos signatários. "
              image="image/seuad.png"
              link="https://www.direitopratico.com.br/"
              title="Direito Prático"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="Trampo de Casa"
              description="Site feito para um cliente com o objetivo de ser uma alternativa para quem esta em busca de um emprego focado unicamente em trabalhos home office. Feito utilizando a tecnologia NextJS.  "
              image="image/trampocasa.png"
              link="https://trampodecasa.com.br/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="Ip Cats"
              description="Esse foi um projeto realizado pela Agência Serpens em 2022. Consiste em um sistema que identifica a origem de determinado IP.
          "
              image="image/ipcast.png"
              link="https://ipcats-delta.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="Health+"
              description="Esse foi um projeto realizado pela Agência Serpens em 2022. Consiste em um aplicativo mobile que tem por objetivo agendar consultas médicas presencias e virtuais.'
          "
              image="image/helth.png"
              link="https://www.behance.net/gallery/141623875/Health"
            />
          </SwiperSlide>
        </Swiper>
      </S.Content>
      <div>
        <Clients />
      </div>
    </S.Section>
  )
}
