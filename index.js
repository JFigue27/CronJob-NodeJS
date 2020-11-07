const cron = require('node-cron');
const execCronJob = require('./utils/fetch');
let cronTime = process.env.CRON_SCHEDULE || '* */15 * * * *';

console.log('Cron job started at ' + cronTime);

cron.schedule(cronTime, () => {
  console.log('About to execute jobs');
  // execCronJob();
  console.log('Done executing jobs');
});
