import { useState, Dispatch, SetStateAction } from 'react'
//import { ContainerLarger, ContainerSmall } from '../../../styles/global'
import { Modal } from '../../Modal'
import * as S from './style'
import { Stacks } from '../../Stacks'
import * as Ss from '../../Stacks/style'
import TypeServices from './Card'
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

export function Services() {
  return (
    <S.Section id="servicos">
      <Ss.Titlestack>
        Conheça as nossas <Ss.ParagraphGreen>soluções</Ss.ParagraphGreen>.<br />
        Com uma equipe altamente qualificada.
      </Ss.Titlestack>
      <S.Services>
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
              slidesPerView: 3,
              spaceBetween: 40
            },
            '@1.50': {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <TypeServices
              title="INTEGRAÇÃO COM O CHATGPT"
              description="Revolucione com a Serpens: Automação de dados. Assistentes digitais coletam informações preciosas na web, poupando buscas manuais. Integramos também com ChatGPT, abrindo portas para interações inteligentes. Transforme processos com eficiência ímpar."
              img="./image/chatgpt.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TypeServices
              title="DESENVOLVEMOS SOLUÇÕES ATRAVÉS DO SOFTWARE"
              description="Serpens: Especialistas em Python, Node.js, PHP e mais. Orquestramos integrações complexas para resultados perfeitos. Simplificamos o técnico para colaboração integrada e soluções excepcionais."
              img="./image/desenvolvimento.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TypeServices
              title="CRIAÇÃO DE DASHBOARD E RELATÓRIOS COM DADOS DO SISTEMA
            "
              description="Transformando dados em insights visuais. Simplificando complexidades, navegando informações com facilidade. Criando narrativas visuais cativantes a partir de dados."
              img="https://www.zscaler.com/_next/image?url=https%3A%2F%2Fwww.zscaler.com%2Fsites%2Fdefault%2Ffiles%2FsolutionsImageTextRow%2FZero%2520Trust%2520Exchange%2520-%2520Solutions%2520-%2520Secure%2520your%2520users.png&w=828&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TypeServices
              title="DESENVOLVIMENTO DE SISTEMAS WEB"
              description="Transforme ideias em realidade digital. Construa um espaço virtual sob medida, onde cada página é uma sala de possibilidades. Desenvolvedores web são mestres construtores, traduzindo código em experiências interativas cativantes. Cada linha de código molda sua visão online, criando um elo duradouro entre você e seu público global."
              img="https://www.zscaler.com/_next/image?url=https%3A%2F%2Fwww.zscaler.com%2Fsites%2Fdefault%2Ffiles%2FsolutionsImageTextRow%2FZero%2520Trust%2520Exchange%2520-%2520Solutions%2520-%2520Secure%2520your%2520users.png&w=828&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TypeServices
              title="AUTOMATIZAÇÃO DE DADOS E SCRAPPING"
              description="Deixe os dados trabalharem para você. Pequenos assistentes digitais exploram a web e coletam informações valiosas sem esforço. Transformam dados em ouro, economizam tempo e liberam sua mente para o que importa. A tecnologia torna a busca por informações eficiente e inteligente."
              img="https://www.zscaler.com/_next/image?url=https%3A%2F%2Fwww.zscaler.com%2Fsites%2Fdefault%2Ffiles%2FsolutionsImageTextRow%2FZero%2520Trust%2520Exchange%2520-%2520Solutions%2520-%2520Secure%2520your%2520users.png&w=828&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TypeServices
              title="INTEGRAÇÃO DE SISTEMA DE PAGAMENTOS"
              description="Facilitamos o processo de pagamento com integrações eficientes. Deixe a tecnologia trabalhar para você, economizando tempo e recursos. Transforme a gestão financeira em algo simples e inteligente, como ter um assistente digital dedicado."
              img="https://www.zscaler.com/_next/image?url=https%3A%2F%2Fwww.zscaler.com%2Fsites%2Fdefault%2Ffiles%2FsolutionsImageTextRow%2FZero%2520Trust%2520Exchange%2520-%2520Solutions%2520-%2520Secure%2520your%2520users.png&w=828&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TypeServices
              title="TRATAMENTO DE DADOS PARA SISTEMAS"
              description="Automatize a coleta e o processamento de dados. Liberte sua mente do trabalho manual e concentre-se no que realmente importa. Transforme montanhas de dados em insights valiosos com nossos assistentes digitais. Simplificamos a busca por informações, tornando-a eficiente e inteligente para você."
              img="https://www.zscaler.com/_next/image?url=https%3A%2F%2Fwww.zscaler.com%2Fsites%2Fdefault%2Ffiles%2FsolutionsImageTextRow%2FZero%2520Trust%2520Exchange%2520-%2520Solutions%2520-%2520Secure%2520your%2520users.png&w=828&q=75"
            />
          </SwiperSlide>
        </Swiper>
      </S.Services>
      <Stacks />
    </S.Section>
  )
}
