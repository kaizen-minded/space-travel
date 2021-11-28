console.log("CONNECTED");

const toggleBtn = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".primary-navigation");

const navigationToggle = {
  toggleBtn,
  navigation,
  open: function () {
    this.navigation.classList.remove("hide-navigation");
    this.setBackgroundImage("close");
  },
  close: function () {
    this.navigation.classList.add("hide-navigation");
    this.setBackgroundImage("hamburger");
  },
  setBackgroundImage: function (word) {
    this.toggleBtn.style.backgroundImage = `url(./assets/shared/icon-${word}.svg)`;
  },
  updateNavigation: function () {
    this.navigation.classList.contains("hide-navigation")
      ? navigationToggle.open()
      : navigationToggle.close();
  },
};

toggleBtn.addEventListener("click", () => navigationToggle.updateNavigation());
