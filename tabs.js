const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const artilces = document.querySelectorAll("article");
const pictures = document.querySelectorAll("picture");

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    displayInfo([...tabs].indexOf(e.target));
  });
});
function displayInfo(index) {
  hideContent();
  showActiveContent(index);
}

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;
  let currentIndex = [...tabs].indexOf(e.target);

  if (e.keyCode === keydownLeft || e.keyCode === keydownLeft) {
    e.target.tabIndex = "-1";
  }
  if (e.keyCode === keydownRight) {
    currentIndex++;
    if (currentIndex >= tabs.length) {
      currentIndex = 0;
    }
  }
  if (e.keyCode === keydownLeft) {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = tabs.length - 1;
    }
  }

  tabs[currentIndex].tabIndex = "0";
  tabs[currentIndex].focus();
}

function hideContent() {
  artilces.forEach((article) => article.classList.add("hide"));
  pictures.forEach((picture) => picture.classList.add("hide"));
  document
    .querySelector("[aria-selected=true]")
    .setAttribute("aria-selected", false);
}

function showActiveContent(index) {
  artilces[index].classList.remove("hide");
  pictures[index].classList.remove("hide");
  tabs[index].setAttribute("aria-selected", true);
}
