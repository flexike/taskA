import React from 'react'
import '../style/style.css'
import { Card, Col, Row} from 'antd';

function CardPeople(props) {

    return (
        <div className="cardWrapper">
            <Row gutter={[16,24]}>
                <Col span={4}>
            <Card
                className="card"
                hoverable
                cover={
                <img
                    style={{padding: '10px'}}
                    alt="avatar"
                    src={props.img}/>
                }
            >
                <h3 className="hCard">{props.name}</h3>
                <p className="pCard">{props.gender}</p>
                <p className="pCard">{props.email}</p>
                <p className="pCard">{props.date.substring(0, 10)}</p>
                <p className="pCardN">{props.nat}</p>
            </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CardPeople;