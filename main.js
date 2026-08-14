// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


//Покраска первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https//google.com')
  } else {
    return
  }
}
//Вывод сообщения в консоль лог
const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))
function outputConsoleLog(message) {
  console.log('message')
  alert('20')
}