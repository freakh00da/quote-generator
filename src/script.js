function getQuote() {
  return fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((q) => q);
}

function generateQuote() {
  getQuote().then((quote) => {
    const content = quote.content;
    const author = quote.author;

    document.getElementById('quote').textContent = content + ' - ' + author;
  });
}

document.getElementById('generate-btn').addEventListener('click', generateQuote);
