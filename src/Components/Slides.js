import React, { useState } from 'react'
import {Row, Col, Button} from 'antd'
import CustomCard from './CustomCard'

const Slides = () => {
    const [index, setIndex] = useState(0)

    const data = [
        {
            title: "Slide 1",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Slide 2",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Slide 3",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Slide 4",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ]

    const handleNext = () => {
            setIndex(index+1)
    }

    const handlePrev = () => {
            setIndex(index-1)
    }

    const handleRestart = () => {
            setIndex(0)
    }
  return (
    <>
    <Row>
        <Col xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 20, offset: 2 }}
                lg={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
                xxl={{ span: 16, offset: 4 }}>
            <Button disabled={index === 0} type='primary' style={{marginLeft: "2rem"}} onClick={handleRestart} data-testid="button-restart">Restart</Button>
            <Button disabled={index === 0} type='primary' style={{marginLeft: "2rem"}} onClick={handlePrev} data-testid="button-prev">Prev</Button>
            <Button disabled={index === data.length -1} type='primary' style={{marginLeft: "2rem"}} onClick={handleNext} data-testid="button-next">Next</Button>
        </Col>
        <br />
        <br />
        <br />
        <Col xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 20, offset: 2 }}
                lg={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
                xxl={{ span: 16, offset: 4 }}>
        <CustomCard title={data[index].title} text={data[index].text} />
        </Col>
    </Row>
    </>
  )
}

export default Slides