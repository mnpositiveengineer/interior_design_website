const chevronRight = document.getElementById('chevron_right');
const chevronLeft = document.getElementById('chevron_left');
chevronRight.addEventListener('click', showNextImg);
chevronLeft.addEventListener('click', showPreviousImg);
document.onkeydown = checkKey;
var dotList = Array.from(document.getElementsByClassName('dot'));

var idx = 1;

function checkKey(e) {
    if (e.keyCode == '39') {
        showNextImg();
    } else if (e.keyCode == '37') {
        showPreviousImg();
    } else {
        return;
    }
}

function showNextImg() {
    const currentImg = document.getElementById(idx);
    
    idx ++;

    if (idx  > dotList.length) { 
        idx  = 1;
    }

    const nextImg = document.getElementById(idx);
    currentImg.classList.add('hidden');
    nextImg.classList.remove('hidden');
    dotList.forEach(dot => dot.classList.remove('active'));
    dotList[idx-1].classList.add('active');
}

function showPreviousImg() {
    const currentImg = document.getElementById(idx);
    
    idx --;

    if (idx < 1) { 
        idx  = dotList.length;
    }

    const nextImg = document.getElementById(idx); 
    currentImg.classList.add('hidden');
    nextImg.classList.remove('hidden');
    dotList.forEach(dot => dot.classList.remove('active'));
    dotList[idx-1].classList.add('active');
}

function currentSlide(slide) {
    dotList.forEach(dot => dot.classList.remove('active'));
    dotList[slide-1].classList.add('active');
    const currentImg = document.getElementById(idx);
    const nextImg = document.getElementById(slide);
    currentImg.classList.add('hidden');
    nextImg.classList.remove('hidden');
    idx = slide;
}