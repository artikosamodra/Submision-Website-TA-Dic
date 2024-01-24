function toggleBtn() {
  let fullArticle = document.getElementById("fullArticle");
  let hiddenA = document.getElementById("hiddenA");
  let showA = document.getElementById("showA");

  if (fullArticle.style.display === "none" || fullArticle.style.display === "") {
    fullArticle.style.display = "block";
    showA.style.display = "none";
    hiddenA.style.display = "block";
  } else {
    fullArticle.style.display = "none";
    showA.style.display = "block";
    hiddenA.style.display = "none";
  }
}
