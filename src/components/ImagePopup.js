function ImagePopup(props) {
  return (
    <div className={`popup popup_full ${props.card ? 'popup_opened' : ''}`}  onClick={props.onOverlayClick}>
        <figure className="popup__container-full">
          <button className="popup__close-button popup__close-button_full" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
          <img src={props.card ? props.card.link : '#'} alt={props.card ? props.card.name : ''} className="popup__full-img" />
          <figcaption className="popup__full-text">{props.card ? props.card.name : ''}</figcaption>
        </figure>
    </div>
  )
};
export default ImagePopup;