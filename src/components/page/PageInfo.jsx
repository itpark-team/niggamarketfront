import React from 'react';

const PageInfo = ({page}) => {
    let gender = page.gender === 0 ? "жен." : "муж";
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

            <p>
                {
                    page.announcementsWorks.map(announcementWork => {
                        return (
                            <div>
                                <p>{announcementWork.workName}</p>
                                <p>{announcementWork.experience}</p>
                            </div>
                        )
                    })
                }
            </p>
        </div>
    );
};

export default PageInfo;

