// @todo: Темплейт карточки.
let templateCard = document.querySelector('#card-template').content;
// @todo: DOM узлы
let cardsList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(initialCard, deleteCard) {
    let card = templateCard.querySelector('.places__item').cloneNode(true);
    let cardImage = card.querySelector('.card__image');
    let cardTitle = card.querySelector('.card__title');
    let deleteButton = card.querySelector('.card__delete-button');

    cardTitle.textContent = `${initialCard.name}`;
    cardImage.src = `${initialCard.link}`;
    deleteButton.addEventListener('click', deleteCard);
    return card;
};
// @todo: Функция удаления карточки
function deleteCard() {
    event.target.closest('.places__item').remove();
};
// @todo: Вывести карточки на страницу
for(let i = 0; i < 6; i++) {
    let readyCard = createCard(initialCards[i], deleteCard);
    cardsList.append(readyCard);
}