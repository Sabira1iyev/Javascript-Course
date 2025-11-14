const startDate = new Date('08/15/2018 9:45:00');
const now = new Date();
console.log(startDate);

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);

console.log(`video cekmeye ${mins} dakika once basladim`);
console.log(`video cekmeye ${hours} saat once basladim`);
console.log(`video cekmeye ${days} gun once basladim`);
console.log(`video cekmeye ${years} yil once basladim`);

const timestamp = 211973127913;
console.log(new Date(timestamp));

