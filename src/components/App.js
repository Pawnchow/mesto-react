import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closeAllPopups();
    }
  };

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        onOverlayClick={handleOverlayClick}
      >
        <label className="popup__input-group">
          <input 
            id="username"
            className="popup__input"
            type="text"
            name="editName"
            placeholder="Ваше Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span
            id="username-error"
            className="popup__error username-error"
          ></span>
        </label>
        <label className="popup__input-group">
          <input
            id="about"
            className="popup__input"
            type="text"
            name="editAbout"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
          />
          <span id="about-error" className="popup__error about-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="photo"
        title="Новое место"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        buttonText="Создать"
        onOverlayClick={handleOverlayClick}
      >
        <label className="popup__input-group">
          <input
            id="cardName"
            className="popup__input"
            type="text"
            name="cardName"
            placeholder="Название"
            required
            minLength="1"
            maxLength="30"
          />
          <span
            id="cardName-error"
            className="popup__error cardName-error"
          ></span>
        </label>
        <label className="popup__input-group">
          <input
            id="cardLink"
            className="popup__input"
            name="cardLink"
            placeholder="Ссылка на картинку"
            required
            type="url"
          />
          <span
            id="cardLink-error"
            className="popup__error cardLink-error"
          ></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        onOverlayClick={handleOverlayClick}
      >
        <label className="popup__input-group">
          <input
            className="popup__input"
            id="avatar"
            name="avatar"
            type="url"
            placeholder="Ссылка на изображение"
            required
          />
          <span className="popup__error avatar-error" id="avatar-error"></span>
        </label>      
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} onOverlayClick={handleOverlayClick} />
    </div>
  )
};

export default App;