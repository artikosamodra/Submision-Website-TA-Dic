function toggleBtn(articleId, hiddenId, showId) {
  let fullArticle = document.getElementById(articleId);
  let hiddenA = document.getElementById(hiddenId);
  let showA = document.getElementById(showId);

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
