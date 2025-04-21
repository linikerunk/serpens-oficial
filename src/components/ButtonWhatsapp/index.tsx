import Image from 'next/image'

import IconWhatsapp from '/public/image/whatsapp.svg'

import * as S from './style'

export function ButtonWhatsapp() {
  return (
    <S.Link href="https://wa.me/5512991642370" target="_blank">
      <Image src={IconWhatsapp} width={50} height={50} alt="logo do whatsapp" />
    </S.Link>
  )
}
