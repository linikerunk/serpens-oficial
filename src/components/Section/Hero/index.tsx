import EffectImage from '/public/image/efeito-imagem.jpg'
import Verify from '/public/image/verificado.svg'
import Vector from '/public/image/Vector.svg'
import Image from 'next/image'

import { FormEvent, useState, useRef } from 'react'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../UI/Button'

import emailjs from 'emailjs-com'

import theme from '../../../styles/theme'
import * as S from './styles'
import { Container } from '../../Container'


interface HeroProps {
  title: string
  subtitle: string
}

export function Hero({ title, subtitle }: HeroProps) {
  const [formularioenviado, setFormularioEnviado] = useState(false)
  const { onBlur, value, onChange, error } = useForm()

  const form = useRef(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(formularioenviado)

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_USER as string,
      process.env.NEXT_PUBLIC_TEMPLATE as string,
      form.current!,
      process.env.NEXT_PUBLIC_PUBLIC_KEY as string
    )

    setFormularioEnviado(true)
  }

  return (
    <S.Main>
      <Container>
      <S.Content>
        <S.TextWrapper>
          <S.Title>
            Estamos <span>focados</span> no seu <span>futuro.</span>
          </S.Title>
          <S.Subtitle>
           A <span>Serpens</span> é uma agência de soluções digitais que trabalha
            com o desenvolvimento de sites, aplicações e sistemas centradas no
            usuário.
          </S.Subtitle>
        </S.TextWrapper>
        <S.CardWrapper>
        {formularioenviado ? (
                <>
                  <S.Subtitle >
                    Seu contato foi recebido por nossa equipe e você será
                    contatado em até <span>24 horas</span>. Estamos ansiosos pra
                    trabalhar com você! 😄
                  </S.Subtitle>
                  <Button color={theme.colors.green} calc={10}>
                    <span>Solicitado</span>
                    <Image src={Verify} alt="imagem de verificação" />
                  </Button>
                </>
              ) : (
                <>
                  <S.Subtitle>Resolva seu problema agora</S.Subtitle>
                  <form onSubmit={handleSubmit} ref={form} autoComplete="off">
                    <S.Input
                      
                      placeholder="Digite seu e-mail"
                      onChange={onChange as any}
                      onBlur={onBlur}
                      value={value}
                      name="email"
                      type="email"
                    />
                    <div>
                      <S.Button
                        color={
                          error
                            ? theme.colors.purple_gradient
                            : theme.colors.purple_gradient
                        }
                        disabled={error ? true : false}
                        cursor={error.toString()}
                        type="submit"
                        >
                        <span>Solicitar orçamento</span>
                        <Image src={Vector} alt="Imagem de Vetor" />
                      </S.Button>
                    </div>
                  </form>
                  </>
              )}            
        </S.CardWrapper>
      </S.Content>
      </Container>
    </S.Main>
  )
}
