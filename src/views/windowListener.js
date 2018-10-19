let modal = document.getElementById('myWindow');
let span = document.getElementsByClassName("close")[0];

let nemuWindow = document.getElementById('nemuWindow');
let span3 = document.getElementsByClassName("close3")[0];

let myWindowNews = document.getElementById('myWindowNews');
let span2 = document.getElementsByClassName("close2")[0];
// B T N L I N K //
myBtn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
// B T N N E W S //
function newmail() {
    myWindowNews.style.display = "block";
}
span2.onclick = function() {
    myWindowNews.style.display = "none";
};
// B T N M E N U //
myBtnHeader.onclick = function() {
    nemuWindow.style.display = "block";
};
span3.onclick = function() {
    nemuWindow.style.display = "none";
};


window.onclick = function () {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === nemuWindow) {
        nemuWindow.style.display = "none";
    }
    if (event.target === myWindowNews) {
        myWindowNews.style.display = "none";
    }
};


