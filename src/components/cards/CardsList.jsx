import React from 'react';
import {Card, Col} from "antd";
import Meta from "antd/es/card/Meta";
import {useNavigate} from "react-router-dom";

const CardsList = ({cards}) => {

    let navigate = useNavigate();

    return (
        <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}
             span={24}>
            {
                cards.map(card => {

                    let gender = card.gender === 0 ? "жен." : "муж";

                    let exData = `Телефон: ${card.phoneNumber} ` +
                        `Пол: ${gender} ` +
                        `Вес: ${card.weight} ` +
                        `Рост: ${card.height} ` +
                        `Цена: ${card.price}`;

                    return (
                        <Card
                            key={card.id}
                            style={{width: "240px"}}
                            cover={<img src={card.picturePath}/>}
                            hoverable={false}
                            onClick={() => navigate("/page/" + card.id)}
                        >
                            <Meta
                                title={card.name}
                                description={exData}
                            />
                        </Card>
                    )
                })
            }
        </Col>
    );
};

export default CardsList;