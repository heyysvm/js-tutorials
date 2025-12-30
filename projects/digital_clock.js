const value = document.querySelector(".mainheading")

setInterval(function () {
    let date = new Date();
    value.innerHTML = date.toLocaleTimeString();
}, 1000);