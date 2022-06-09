function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card)
  };

  return (
    <li className="photo__item">
      <figure className="photo__card">
        <button className="photo__remove" type="button" aria-label="Удалить"></button>
        <img className="photo__img" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
        <figcaption className="photo__info">
          <h2 className="photo__text">{props.card.name}</h2>
          <div className="photo__like-wrapper">
            <button className="photo__like" type="button" aria-label="Мне нравится"></button>
            <span className="photo__like_counter">{props.card.likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  )
}
export default Card;