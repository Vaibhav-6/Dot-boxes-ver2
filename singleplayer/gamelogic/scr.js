window.onload = document.getElementsByClassName("popup")[0].classList.add("active");

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
});
let ele

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    ele = parseInt(document.querySelector('input[name="grid"]:checked').value)
    console.log(ele)
    sessionStorage.setItem("gridsize", JSON.stringify(ele))
    location.href = "main/index.html"
})