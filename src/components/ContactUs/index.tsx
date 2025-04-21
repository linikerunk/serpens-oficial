import Image from 'next/image'

import ArrowRigth from '/public/image/arrowrigth.svg'
import Verificed from '/public/image/verificado.svg'

import * as S from './style'
import { useForm } from '../../hooks/useForm'
import { Button } from '../UI/Button'
import theme from '../../styles/theme'
import { FormEvent, useRef, useState } from 'react'

import emailjs from 'emailjs-com'

export function ContactUs() {
  const [formularioenviado, setFormularioEnviado] = useState(false)
  const { onBlur, value, onChange, error } = useForm()

  const form = useRef(null)

  function HandleSubmit(e: FormEvent) {
    e.preventDefault()

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_USER as string,
      process.env.NEXT_PUBLIC_TEMPLATE as string,
      form.current!,
      process.env.NEXT_PUBLIC_PUBLIC_KEY as string
    )

    setFormularioEnviado(true)
  }

  return (
    <S.Section id="orcamento">
        <S.Title>
          Curtiu o que viu? Então venha trabalhar <span>conosco.</span>
        </S.Title>
        <S.Description>
          Deixe seu e-mail e a nossa equipe irá lhe contatar em até <b>24h</b>.
          Se preferir, você pode nos chamar pe lo
          <S.Span>WhatsApp clicando no botão à direita da tela</S.Span> ou pelo
          e-mail
          <b>
            <S.Span>serpens.helpers@gmail.com</S.Span>
          </b>
        </S.Description>
        <S.Form onSubmit={HandleSubmit} ref={form} autoComplete="off">
          <S.Input
            placeholder="Digite seu e-mail"
            onChange={onChange as any}
            onBlur={onBlur}
            value={value}
            name="email"
            type="email"
          />
          {formularioenviado ? (
            <Button color={theme.colors.green}>
              <span>Orçamento solicitado</span>
              <Image
                src={Verificed}
                alt="Icon de enviado com sucesso"
                width={20}
                height={20}
              />
            </Button>
          ) : (
            <S.Button
              type="submit"
              disabled={error ? true : false}
              cursor={error.toString()}
            >
              <span>Solicitar orçamento</span>
              <Image src={ArrowRigth} alt="Imagem de seta para a direita" />
            </S.Button>
          )}
        </S.Form>
    </S.Section>
  )
}
