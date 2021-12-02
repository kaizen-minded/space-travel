const navigation = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const navigationToggle = {
  navToggle,
  navigation,
  open: function () {
    this.navigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  },
  close: function () {
    this.navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  },
  updateNavigation: function () {
    navigation.dataset.visible === "false"
      ? navigationToggle.open()
      : navigationToggle.close();
  },
};

navToggle.addEventListener("click", () => navigationToggle.updateNavigation());
