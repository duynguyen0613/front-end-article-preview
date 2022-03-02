const footerIconUI = document.querySelector(".card__footer");


footerIconUI.addEventListener("click", () => {
    var socialLink = document.querySelector(".social-link");

    socialLink.style.display = socialLink.style.display === "none" ? "flex" : "none";
})