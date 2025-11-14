const now = new Date();
console.log(now);
console.log(typeof (now));

console.log('year:', now.getFullYear());
console.log('month:', now.getMonth() + 1);
console.log('date:',now.getDate());
console.log('day:',now.getDay());
console.log('hours:',now.getHours());
console.log('minute:',now.getMinutes());
console.log('seconds:',now.getSeconds());


console.log("timestamp:",now.getTime());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());