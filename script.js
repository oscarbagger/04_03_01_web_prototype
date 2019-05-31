window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector(".container").classList.toggle("hidden");
    document.querySelector("#headerlogo").classList.toggle("hidden");
    document.querySelector("#headerbiglogo").classList.toggle("hidden");
    document.querySelector("#headerprofile").classList.toggle("hidden");
    document.querySelector("#logout").classList.toggle("hidden");
    //document.querySelector("#menuknap").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("expand");

    var erSkjult = document.querySelector("#menu").classList.contains("hidden");
}
