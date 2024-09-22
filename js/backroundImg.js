const bgImgList = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg"];

const bgImgPick = bgImgList[Math.floor(Math.random() * bgImgList.length)];


const body = document.querySelector('body');

body.style.background = `url("img/${bgImgPick}") center center / cover no-repeat`;