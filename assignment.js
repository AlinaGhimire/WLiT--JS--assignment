const nowdate = new Date();
console.log(nowdate.toLocaleString());
console.log(Date.prototype.hasOwnProperty("toISOString"));
nowdate.__proto__;

const toStringResult = nowdate.toString();
console.log("toString():", toStringResult);

const toDateStringResult = nowdate.toDateString();
console.log("toDateString():", toDateStringResult);

const toTimeStringResult = nowdate.toTimeString();
console.log("toTimeString():", toTimeStringResult);

const toISOStringResult = nowdate.toISOString();
console.log("toISOString():", toISOStringResult);
