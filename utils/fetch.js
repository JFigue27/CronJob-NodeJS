const fetch = require('node-fetch');

const fetchObject = [
  { url: 'http://localhost:5000/Charge/ApplyMembershipCharges.json', method: 'Get' },
  // { url: 'https://api.github.com/users', method: 'Get' },
  // { url: 'http://localhost:5000/Ping.json', method: 'Get' },
];

async function execCronJob() {
  for (const URL of fetchObject) {
    try {
      console.log(`About to get ${URL.url}`);
      const resp = await fetch(URL.url);
      const json = await resp.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  return;
}

module.exports = execCronJob;
