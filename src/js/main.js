
// ----------------------Header Burger btn ==========================
const burgerButton = document.querySelector("#burger"),
  navMenu = document.querySelector(".header .header-content .nav-menu"),
  navListItem = document.querySelectorAll(".header .header-content .nav-menu .list-item"),
  main = document.querySelector(".main");
//Event Listener
burgerButton.addEventListener("click", menuActive);

//on ferme la nav-menu à chaque fois qu'om clique sur un nav-item
navListItem.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    burgerButton.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//on fer la navMenu au clique sur le bloque main

main.addEventListener("click", () => {
  burgerButton.classList.remove("active");
  navMenu.classList.remove("active");
});

//funtions
function menuActive() {
  if (burgerButton.classList.contains("active")) {
    burgerButton.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    burgerButton.classList.add("active");
    navMenu.classList.add("active");
  }
}

















// Fonction d'initialisation du sélecteur de langue
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "fr",
      includedLanguages: "fr,en,de,es",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element",
  );
}

function updateGoogleTranslationApiKey() {
  google.translate.TranslateElement({pageLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-12345678-9'}, 'google_translate_element');
}