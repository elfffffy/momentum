const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const ddate = String(date.getDate()).padStart(2, '0');

const dateBox = document.querySelector('.date');

dateBox.innerText = `${year}-${month}-${ddate}`;