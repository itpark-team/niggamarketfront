// import React from 'react';
// import {useParams} from "react-router-dom";
// import {useEffect, useState} from "@types/react";
// import {Alert} from "antd";
// import AnnouncementsApiWorker from "../../api/AnnouncementsApiWorker";
// import PageInfo from "./PageInfo";
//
// const Page = () => {
//     let {cardId} = useParams();
//
//     let [page, setPage] = useState({});
//
//     let [hasApiError, setHasApiError] = useState(false);
//     let announcementsApiWorker = new AnnouncementsApiWorker();
//
//     useEffect(() => {
//         announcementsApiWorker.getPageById(cardId).then(
//             response => {
//                 setPage(response.data)
//             }
//         ).catch(
//             error => {
//                 setHasApiError(true);
//             }
//         )
//     }, []);
//
//     return (
//         <div>
//             <h1>Подробности</h1>
//             {
//                 hasApiError
//                     ? <Alert message="Ошибка в запросе" type="error"/>
//                     : <PageInfo page={page}/>
//
//
//             }
//         </div>
//     );
// };
//
// export default Page;

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import AnnouncementsApiWorker from "../../api/AnnouncementsApiWorker";
import {Alert} from "antd";
import PageInfo from "./PageInfo";

const Page = () => {
    let {cardId} = useParams();

    let [page, setPage] = useState({});

    let [hasApiError, setHasApiError] = useState(false);
    let announcementsApiWorker = new AnnouncementsApiWorker();

    useEffect(() => {
        announcementsApiWorker.getPageById(cardId).then(
            response => {
                setPage(response.data);
                console.log(page);
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }, []);

    return (
        <div>
            <h1>Подробности</h1>
            {
                hasApiError
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <PageInfo page={page}/>
            }
        </div>
    );
};

export default Page;