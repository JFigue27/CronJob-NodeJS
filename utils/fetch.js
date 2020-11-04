const fetch = require('node-fetch');

const fetchObject = [
  { url: 'http://localhost:5000/Charge/ApplyMembershipCharges', method: 'Get' },
  { url: 'https://api.github.com/users', method: 'Get' },
];

async function execCronJob() {
  for (const URL of fetchObject) {
    await fetch(URL.url);
  }

  return;
}

module.exports = execCronJob;
