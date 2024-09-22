function generateImg(){
    const profileImgList = ['boy01.jpg', 'boy02.jpg', 'boy03.jpg', 'girl01.jpg', 'girl02.jpg', 'girl03.jpg'];

    const chosenProfileImg = profileImgList[Math.floor(Math.random() * profileImgList.length)];
    
    const savedProfile = localStorage.getItem('profile');
    const profileImg = document.createElement('img');
    const showImg = document.querySelector('.profile img');

    if (profileFigure.childElementCount > 0) {
        showImg.remove();
    }
    
    if(savedProfile === null) {
        localStorage.setItem('profile', chosenProfileImg);
    } 
    
    profileImg.src = `img/${localStorage.getItem('profile')}`;
    profileFigure.appendChild(profileImg);
}

function changeImg(){
    localStorage.removeItem('profile');
    generateImg();
}

const profileFigure = document.querySelector('.profile figure');
generateImg();
profileFigure.addEventListener('click', changeImg);