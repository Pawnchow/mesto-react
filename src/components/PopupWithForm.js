function PopupWithForm( {buttonText="Сохранить", ...props}) {

    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={props.onOverlayClick}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <form className={`popup__form popup__form_${props.name}`} name ={props.name} noValidate>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__save-button" type="submit" aria-label={buttonText}>{buttonText}</button>
                </form>
            </div>
        </div>
    )
};
export default PopupWithForm;