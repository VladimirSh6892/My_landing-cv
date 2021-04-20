new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enable: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".project-slider",
  },
  autoHeight: true,
});

const skillsBtnWrapper = document.querySelector(".skills-btn-wrapper");
const skillsWrapper = document.querySelector(".skills-wrapper");

const toggleBtnWrapper = (e) => {
  e.preventDefault();
  console.log();
  if (skillsWrapper.offsetHeight === 440 || skillsWrapper.offsetHeight === 2390) {
    skillsBtnWrapper.classList.toggle("skills-btn-active");
    skillsWrapper.classList.toggle("skills-wrapper-mobile-active");
  } else {
    skillsBtnWrapper.classList.toggle("skills-btn-active");
    skillsWrapper.classList.toggle("skills-wrapper-active");
  }
};
skillsBtnWrapper.addEventListener("click", toggleBtnWrapper);
