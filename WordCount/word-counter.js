let firstLine = document.querySelector("p");
firstLine = firstLine.innerText.split(" ").length;
let readingTime = firstLine / 250;
document.querySelector("p").append(" (Reading time: " + readingTime + " minutes)");