import React from 'react'
import {Card} from 'antd'

const CustomCard = ({title, text}) => {
  return (
    <Card hoverable>
      <h1 data
testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
    </Card>
  )
}

export default CustomCard