const cron = require('node-cron');
const execCronJob = require('./utils/fetch');

cron.schedule('*/3 * * * * *', () => {
  // execCronJob();
  console.log('Cada segundo');
});
