import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription ] = useState('');
    const [userAvatar, setUserAvatar] = useState('#');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cardData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cardData);
        })
        .catch((err) => console.log(err))
    },[]);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar" onClick={props.onEditAvatar}>
                    <img className="profile__img" src={userAvatar} alt="Изображение пользователя"/>
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    </div>
                    <h2 className="profile__user-text">{userDescription}</h2>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить изображение" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo">
                <ul className="photo__items">
                    {cards.map((card) => { return <Card key={card._id} card={card} onCardClick={props.onCardClick} /> })}
                </ul>
            </section>
        </main>
    )
};
export default Main;
