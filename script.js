const quoteElement = document.querySelector('.quote');
const button = document.querySelector('.header__btn');

function updateQuote() {
  fetch('https://api.kanye.rest')
  .then((response) => {
    return response.json();
  })
 .then((resData) => {
    quoteElement.textContent = resData.quote;
  })
  .catch((error) => {
    console.log(error);
  });
}

button.addEventListener('click', updateQuote);