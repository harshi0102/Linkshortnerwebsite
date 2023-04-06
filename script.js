const form = document.querySelector('form');
const input = document.querySelector('input[type="url"]');
const output = document.getElementById('short-url');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const longUrl = input.value;

  // generate a unique short code using an API
  const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 7cd435353e4036038791c7b2956bd0a2cff150fc',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    long_url: longUrl
  })
});

  const data = await response.json();

  // display the shortened URL to the user
  const shortUrl = data.link;
  output.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
});
