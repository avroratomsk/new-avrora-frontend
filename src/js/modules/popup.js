import { bodyLock, bodyUnLock } from "./functions.js";

const openPopup = (e) => {
  bodyLock();
  document.documentElement.classList.add("popup-show");
  const currentPopup = document.getElementById(e.currentTarget.dataset.popup);
  currentPopup.classList.add("popup_show");
};

const closePopup = (e) => {
  bodyUnLock();
  document.documentElement.classList.remove("popup-show");
  document.querySelector(".popup_show").classList.remove("popup_show");
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27 && document.querySelector(".popup_show").classList.contains("popup_show")) {
    document.querySelector(".popup_show").classList.remove("popup_show");
    document.body.classList.remove("_lock");
    bodyUnLock();
    document.documentElement.classList.remove("popup-show");
  }
});

const popup = document.querySelectorAll(".popup");
popup?.forEach(popup => popup.addEventListener("click", (e) => {
  if (!e.target.closest(".popup__content")) {
    e.currentTarget.classList.remove("popup_show");
    document.body.classList.remove("_lock");
    document.documentElement.classList.remove("popup-show");
    bodyUnLock();
  }
}));

const modalOpenButtonsList = document.querySelectorAll("[data-popup]");
modalOpenButtonsList?.forEach(btn => btn.addEventListener("click", openPopup));

const modalCloseButtonsList = document.querySelectorAll("[data-close]");
modalCloseButtonsList?.forEach(btn => btn.addEventListener("click", closePopup));
