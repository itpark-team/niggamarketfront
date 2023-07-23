import React from 'react';

const PageInfo = ({page}) => {
    let gender = page.gender === 0 ? "жен." : "муж";

    // console.log(page);

    return (
        <div>
            <p><img src={page.picturePath}/></p>
            <p>Имя: {page.name}</p>
            <p>Возраст: {page.age}</p>
            <p>Пол: {gender}</p>
            <p>Вес: {page.weight}</p>
            <p>Рост: {page.height}</p>
            <p>Описание: {page.description}</p>
            <p>Цена: {page.price}</p>
            <p>Номер телефона: {page.phoneNumber}</p>

            {/*<p>*/}
            {/*    {*/}
            {/*        page.announcementsWorks.map((item) => {*/}
            {/*            return (*/}
            {/*                <div>*/}
            {/*                    <p>{item.workName}</p>*/}
            {/*                    <p>{item.experience}</p>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</p>*/}
        </div>
    );
};

export default PageInfo;

