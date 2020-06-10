// from GH docs Request a user's GitHub identity
const URL = 'https://github.com/login/oauth/authorize';
// needed query string
const options = {
  client_id: 'f02d951c77bebd253dbf', //required!!
  scope: 'read:user',
  state: '401 demo ask for user consent',
};
// converting the obj to string and formatting the resulting string
const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');

console.log('Query', queryString);
// making the full url
const authUrl = `${URL}?${queryString}`;
const link = document.getElementById('oauth');
link.setAttribute('href', authUrl);
