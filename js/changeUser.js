const changeUserBtn = document.querySelector('.change');
const confirmBtn = document.querySelector('.changeOk');
const cancleBtn = document.querySelector('.changeNo');

function removeAlert(){
    document.querySelector('body').classList.remove('on');
    document.querySelector('.alert').classList.remove('on');
}

changeUserBtn.addEventListener('click', () => {
    document.querySelector('body').classList.add('on');
    document.querySelector('.alert').classList.add('on');

    confirmBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('profile');
        localStorage.removeItem('todos');

        removeAlert();
        section01.classList.remove('off');
        main.classList.add('off');
        greeting();
    })

    cancleBtn.addEventListener('click', () => {
        removeAlert();
    })

    
});

