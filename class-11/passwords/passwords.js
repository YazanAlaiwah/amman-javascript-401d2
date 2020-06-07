const base64 = require('base-64');
const bcrypt = require('bcrypt');
const string = 'mahmoud:password'; // username:password
const encoded = base64.encode(string);
const decoded = base64.decode(encoded);

// console.log('String', string);
// console.log('Encoded', encoded);
// console.log('Decoded', decoded);

const password = 'P@55w0rD';
const complexity = 5; //salt
encypt(password, complexity);
async function encypt(pw, rounds) {
  const hash = await bcrypt.hash(pw, rounds);
  const p1 = '$2b$05$WAbqNgXrTyBcza1oraZwReiS0qAZYMM.kZNdK8ivQK4lQcCxFIfrS'; //first hash
  const p2 = '$2b$05$HQ43/7dvqMiqRcB5mkW/5.z1mjTXbcl6UchigqYmVf/KJxUZ18Yc2'; // diffrent hash for the same password
  const p3 = '$2b$05$HQ43/7dvqMiqRcB5mkW/5.z1mjTXbcl6UchigqYmVf/KJxUZ18Yc4'; //p2 with a change
  const isValid = await bcrypt.compare(pw, p1);
  const isp2Valid = await bcrypt.compare(pw, p2);
  const isp3Valid = await bcrypt.compare(pw, p3);
  console.log('__HASHED', pw, hash);
  console.log('isValid', isValid);
  console.log('isP2Valid', isp2Valid);
  console.log('isP3Valid', isp3Valid);
}
