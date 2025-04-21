import React, { FC } from 'react'
import * as S from './style'
import * as Ss from '../../Stacks/style'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

interface TypeServicesProps {
 
  
  title: string
  img: string
  description: string
}

const TypeServices: FC<TypeServicesProps> = ({
  title,
  description,
  img
}) => {
  return (
    <S.TypeServices>
      <Card className='cardDiv' sx={{ maxWidth: 345  }}>
        <CardActionArea className='card'>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
          />
          <CardContent sx={{ minHeight: '250px'}}  className='card'>
            <Typography gutterBottom  component="div" align='left' marginBottom={2} color='#fff'>
              <Ss.ParagraphWhite>{title}</Ss.ParagraphWhite>
            </Typography>
            <Typography variant="h5"  align='left'    color='#ADADAD'>
            {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </S.TypeServices>
  )
}

export default TypeServices


