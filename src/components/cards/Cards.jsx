import React, {useEffect, useState} from 'react';
import AnnouncementsApiWorker from "../../api/AnnouncementsApiWorker";
import {Alert} from "antd";
import CardsList from "./CardsList";

const Cards = () => {

    let [cards, setCards] = useState([]);
    let [hasApiError, setHasApiError] = useState(false);
    let announcementsApiWorker = new AnnouncementsApiWorker();

    useEffect(() => {
        announcementsApiWorker.getAllCards().then(
            response => {
                setCards(response.data)
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }, []);


    return (
        <div>
            <h1>Карточки</h1>
            {
                hasApiError
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <CardsList cards={cards}/>
            }
        </div>
    );
};

export default Cards;