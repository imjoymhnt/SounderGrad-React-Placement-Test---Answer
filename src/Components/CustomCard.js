import React from 'react'
import {Card} from 'antd'

const CustomCard = ({title, text}) => {
  return (
    <Card hoverable>
      <h1>{title}</h1>
      <h3>{text}</h3>
    </Card>
  )
}

export default CustomCard