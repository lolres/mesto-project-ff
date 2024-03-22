// @todo: Темплейт карточки.
const templateCard = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(cardData, deleteCard) {
    const card = templateCard.querySelector('.places__item').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.alt;
    deleteButton.addEventListener('click', deleteCard);
    return card;
};
// @todo: Функция удаления карточки
function deleteCard(event) {
    event.target.closest('.places__item').remove();
};
// @todo: Вывести карточки на страницу
for(let i = 0; i < initialCards.length; i++) {
    const readyCard = createCard(initialCards[i], deleteCard);
    cardsList.append(readyCard);
}