// Obtendo referêcia do elemento
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

// Adicionando evento de click ao botão
// Ao clicar no botão o popup aparece
button.addEventListener('click', () => {
    popup.style.display = "block";
});


// Adicionando evento de click ao popup, x e botao 'saiba mais'
// Ao clicar em um dos 3 elementos o popup é fechado
popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link'];
    const shouldClosePopup = classNames.some(className => 
        className === classNameOfClickedElement);

    if (shouldClosePopup) {
        popup.style.display = "none";
    };

});