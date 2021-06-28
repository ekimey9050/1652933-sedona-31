const link = document.querySelector(".popup");
const form = document.querySelector(".search-form")
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("modal")
});
