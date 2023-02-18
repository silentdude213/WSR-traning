'use strict';

let position = 0;
const showSlide = 1;
const scrollSlide = 1;
const container = document.querySelector(".section-booking__slider");
const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slide');
const slidesCount = slides.length;
let slideWidth;
let movePosition;

function SetWidth(){
    slideWidth = container.clientWidth;
    movePosition = showSlide * slideWidth;
    slides.forEach((slide) => {
        slide.style.minWidth = `${slideWidth}px`;
     });
    SetPosition();
};

window.addEventListener("resize", SetWidth);
SetWidth();

let timer = setInterval(() => {
    position -= movePosition;
    if (position <= -(slidesCount - showSlide) * slideWidth){
        position = 0;
    }
    SetPosition();
}, 3000);

function SetPosition(){
    track.style.transform = `translateX(${position - movePosition}px)`;
}
