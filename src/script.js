function toggleBtn(articleId, hiddenId, showId) {
  let fullArticle = document.getElementById(articleId);
  let hiddenA = document.getElementById(hiddenId);
  let showA = document.getElementById(showId);

  if (
    fullArticle.style.display === "none" ||
    fullArticle.style.display === ""
  ) {
    fullArticle.style.display = "block";
    showA.style.display = "none";
    hiddenA.style.display = "block";
  } else {
    fullArticle.style.display = "none";
    showA.style.display = "block";
    hiddenA.style.display = "none";
  }
}

// const NavbarNav = document.querySelector(".navbar-nav");

// document.querySelector(
//   ("#menu".onclick = (e) => {
//     NavbarNav.classList.toggle(".active");
//     e.preventDefault();
//   })
// );

// function menuBar() {
//     let menuButton = document.getElementById('menu')
//     let navbarNav = document.getElementById('navbar')
// }

const menuButton = document.getElementById("menu");
const navbarNav = document.getElementById("navbar");

document.querySelector(
  (menuButton.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  })
);
