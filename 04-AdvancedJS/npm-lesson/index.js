const moment = require('moment');

const aDay = new Date();
const niceDay = moment(aDay).format('lll')
console.log(niceDay);