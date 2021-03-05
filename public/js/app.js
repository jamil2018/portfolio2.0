AOS.init({
  disable: "mobile",
});
const mainNav = document.querySelector("#headerNav");
const navbarToggleTriggerSection = document.querySelector(
  "section:nth-of-type(1)"
);
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  if (this.scrollY + 50 >= navbarToggleTriggerSection.offsetTop)
    mainNav.classList.add("scroll-header");
  else mainNav.classList.remove("scroll-header");
});

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.header__links a[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.header__links a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  });
});
