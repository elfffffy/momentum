const loginForm = document.querySelector('.login_form');
const userAnswer = document.querySelector('.input_name');
const startBtn = document.querySelector('.start');
const section01 = document.querySelector('.section01');
const section02 = document.querySelector('.section02');
const section03 = document.querySelector('.section03');
const greeting2 = document.querySelector('.section02 .greeting');
const greeting3 = document.querySelector('.section03 .greeting');
const main = document.querySelector('.main');
const mainName = document.querySelector('.main .text h3');

const savedUsername = localStorage.getItem('username');

const date = new Date();
const hour = parseInt(date.getHours());

function day(){
    if (hour >= 4 && hour < 12){
        return 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

function loginSubmit(event) {
    event.preventDefault();
    const username = userAnswer.value;
    localStorage.setItem('username', username);
    welcome2(username);
}

function welcome2(name) {
    section01.classList.add('off');
    section02.classList.remove('off');
    greeting2.innerText = `Welcome, ${name}!`;
    const greetingWords = day();
    mainName.innerText = `${greetingWords}, ${name}!`
    setTimeout(showMain,1500);
}

function welcome3(name) {
    section01.classList.add('off');
    section03.classList.remove('off');
    greeting3.innerText = `Welcome Back, ${name}!`;
    const greetingWords = day();
    mainName.innerText = `${greetingWords}, ${name}!`
    setTimeout(showMain,2000);

}

function showMain(){
    section02.classList.add('off');
    section03.classList.add('off');
    main.classList.remove('off');
}

function greeting() {
    if (savedUsername === null) {
        section01.classList.remove('off');
        loginForm.addEventListener('submit', loginSubmit);
    
    } else {
        welcome3(savedUsername);
    }

    userAnswer.value = '';
}

greeting();
