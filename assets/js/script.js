'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variables
const customItem = document.querySelectorAll("[data-custom-item]");
const customModalContainer = document.querySelector("[data-custom-modal-container]");
const customModalCloseBtn = document.querySelector("[data-custom-modal-close-btn]");
const customOverlay = document.querySelector("[data-custom-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalImg2 = document.querySelector("[data-modal-img2]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// custom modal variable
const customModalTitle = document.querySelector("[data-custom-modal-title]");
const customModalDate = document.querySelector("[data-custom-modal-date]");
const customModalText = document.querySelector("[data-custom-modal-text]");
const customModalDesc = document.querySelector("[data-custom-modal-desc]");


// modal variables
const customItem2 = document.querySelectorAll("[data-custom2-item]");
const customModalContainer2 = document.querySelector("[data-custom2-modal-container]");
const customModalCloseBtn2 = document.querySelector("[data-custom2-modal-close-btn]");
const customOverlay2 = document.querySelector("[data-custom2-overlay]");

// custom modal variable
const customModalTitle2 = document.querySelector("[data-custom-modal2-title]");
const customModalDate2 = document.querySelector("[data-custom-modal2-date]");
const customModalText2 = document.querySelector("[data-custom-modal2-text]");
const customModalDesc2 = document.querySelector("[data-custom-modal2-desc]");
const customModalAccess = document.querySelector("[data-custom-modal2-access]");
const customModalButton = document.querySelector("[data-custom-modal2-button]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// custom modal toggle function
const customModalFunc = function () {
  customModalContainer.classList.toggle("active");
  customOverlay.classList.toggle("active");
}

// custom modal2 toggle function
const customModal2Func = function () {
  customModalContainer2.classList.toggle("active");
  customOverlay2.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalImg2.innerHTML = this.querySelector("[data-testimonials-img2]").innerHTML;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

for (let i = 0; i < customItem.length; i++) {
  customItem[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prévient la navigation de l'ancre
    const itemParent = this.closest('.timeline-item'); // Trouve l'élément parent li
    customModalText.innerHTML = itemParent.querySelector("[data-custom-text]").innerHTML;
    customModalTitle.innerHTML = itemParent.querySelector("[data-custom-title]").innerHTML;
    customModalDate.innerHTML = itemParent.querySelector("[data-custom-date]").textContent; // Met à jour la date
    customModalDesc.innerHTML = itemParent.querySelector("[data-custom-desc]").textContent; // Met à jour la date



    customModalFunc();
  });
}

for (let i = 0; i < customItem2.length; i++) {
  customItem2[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prévient la navigation de l'ancre
    const itemParent = this.closest('.project-item'); // Trouve l'élément parent li
    customModalText2.innerHTML = itemParent.querySelector("[data-custom2-text]").innerHTML;
    customModalTitle2.innerHTML = itemParent.querySelector("[data-custom2-title]").innerHTML;
    customModalDate2.innerHTML = itemParent.querySelector("[data-custom2-date]").textContent; // Met à jour la date
    customModalDesc2.innerHTML = itemParent.querySelector("[data-custom2-desc]").textContent; // Met à jour la date
    // customModalAccess.innerHTML = itemParent.querySelector("[data-custom2-access]").innerHTML; // Met à jour la date
    customModalButton.innerHTML = itemParent.querySelector("[data-custom2-button]").innerHTML; // Met à jour la date


    console.log('Launch')

    customModal2Func();
  });
}



// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// add click event to custom modal close button
customModalCloseBtn.addEventListener("click", customModalFunc);
customOverlay.addEventListener("click", customModalFunc);

// add click event to custom modal 2 close button
customModalCloseBtn2.addEventListener("click", customModal2Func);
customOverlay2.addEventListener("click", customModal2Func);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "tout") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}