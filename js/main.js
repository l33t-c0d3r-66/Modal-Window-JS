"use strict"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const showModalButtons = document.querySelectorAll(".show-modal");

const showModal = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
};

const closeModal = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
};


showModalButtons.forEach(e => {
    e.addEventListener("click",showModal);
});

closeModalButton.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);
document.addEventListener("keydown",function (e) {
    if(e.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});