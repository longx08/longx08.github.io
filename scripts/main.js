let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/jzg.png"){
        myImage.setAttribute("src", "images/jzg2.png");
    } else {
        myImage.setAttribute("src", "images/jzg.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please Enter your name:");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla cool, " + myName; 
    }    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}