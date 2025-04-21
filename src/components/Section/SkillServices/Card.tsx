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
      <Card sx={{ maxWidth: 345  }} className='cardDiv'>
        <CardActionArea className='card'>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
          />
          <CardContent sx={{ minHeight: '250px'}}>
            <Typography gutterBottom  component="div" align='left' marginBottom={2} color='#5509B9'>
              <Ss.ParagraphWhite>{title}</Ss.ParagraphWhite>
            </Typography>
            <Typography variant="h5"  align='left' color='#ADADAD' fontSize='1.7rem'>
            {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </S.TypeServices>
  )
}

export default TypeServices
